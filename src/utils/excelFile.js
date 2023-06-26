import *  as  XLSX from 'xlsx'

export function importExcelFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      
      try {
        const data = new Uint8Array(event.target.result)

        const workbook = XLSX.read(data, {type: 'array'})

        const firstSheet = workbook.Sheets[workbook.SheetNames[0]]

        const jsonData = XLSX.utils.sheet_to_json(firstSheet, {header: 1, raw: false})

        resolve(jsonData)
      } catch (e) {
        reject(new Error('Excel文件格式有误，请选择正确的文件'))
      }
    }
    reader.readAsArrayBuffer(file)
  })
}