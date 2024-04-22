import dayjs from 'dayjs'
export const formatDate = (val, fmtStr="YYYY-MM-DD HH:mm:ss") => {
  if (typeof val === 'string' || typeof val === 'number') {
    return dayjs(val).format(fmtStr)
  } else {
    return ''
  }
}