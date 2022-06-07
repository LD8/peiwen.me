const isDev = process.env.NODE_ENV === 'development'

const logger = { dev, debug, log, nodeDev }
export default logger

/**
 * Should be the most commonly used logger function
 *
 * for development/local dev mode only
 */
function dev(data: IData, type: ILogType = 'info') {
  if (isDev) {
    if (typeof data === 'string') {
      debug('', data, true, type)
    } else {
      debug(data, 'Dev Debug', false, type)
    }
  }
}

function nodeDev(...args: any[]) {
  if (isDev) console.log('NodeDev: ', ...args)
}

/**
 * for general debug purposes
 */
function debug(
  data: IData,
  groupName = 'GENERAL DEBUG',
  collapsed = false,
  type: ILogType = 'log',
) {
  group(() => log(data, type), groupName, collapsed)
}

function log(data: IData, type: ILogType = 'log') {
  console[type](data)
}

// ********************************************* PRIVATE *****
function group(logFn: () => void, name = 'GENERAL DEBUG', collapsed = false) {
  console[collapsed ? 'groupCollapsed' : 'group'](`[${name}]`)
  logFn()
  console.groupEnd()
}

// ********************************************* TYPES *****
type IData = string | Record<any, any>
type ILogType = 'log' | 'info' | 'warn' | 'trace' | 'error'
