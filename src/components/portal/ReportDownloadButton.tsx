'use client'
import { Download } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ReportDownloadButtonProps {
  reportName: string
  reportDate?: string
  className?: string
  children?: React.ReactNode
  iconSize?: number
}

function toAscii(value: string) {
  return value
    .replace(/\u2014/g, '-')
    .replace(/–/g, '-')
    .replace(/²/g, '2')
    .replace(/[^\x20-\x7E]/g, '')
}

function escapePdfText(value: string) {
  return toAscii(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

function slugify(value: string) {
  const slug = toAscii(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return slug || 'amcorn-report'
}

function createPdfBlob(reportName: string, reportDate = new Date().toLocaleDateString('en-GB')) {
  const lines = [
    'AMCORN',
    reportName,
    `Generated: ${reportDate}`,
    '',
    'This demo report confirms that the portal download action is wired.',
    'Production deployments should replace this client-side sample with',
    'the signed compliance report returned by the report service.',
  ]

  const text = lines
    .map((line, index) => {
      const yMove = index === 0 ? '0' : '-24'
      const fontSize = index === 0 ? 22 : index === 1 ? 16 : 11
      return `/F1 ${fontSize} Tf 0 ${yMove} Td (${escapePdfText(line)}) Tj`
    })
    .join('\n')

  const stream = `BT\n72 760 Td\n${text}\nET`
  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>\nendobj\n',
    `4 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}\nendstream\nendobj\n`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
  ]

  let pdf = '%PDF-1.4\n'
  const offsets = objects.map((object) => {
    const offset = pdf.length
    pdf += object
    return offset
  })

  const xrefOffset = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  pdf += offsets.map((offset) => `${String(offset).padStart(10, '0')} 00000 n \n`).join('')
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`

  return new Blob([pdf], { type: 'application/pdf' })
}

export function ReportDownloadButton({
  reportName,
  reportDate,
  className,
  children,
  iconSize = 14,
}: ReportDownloadButtonProps) {
  const download = () => {
    const blob = createPdfBlob(reportName, reportDate)
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${slugify(reportName)}.pdf`
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <button
      type="button"
      className={cn('inline-flex items-center justify-center gap-2', className)}
      onClick={download}
      aria-label={`Download ${reportName}`}
    >
      {children ?? <Download size={iconSize} />}
    </button>
  )
}
