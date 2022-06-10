const isDev = process.env.NODE_ENV === 'development'

type ILogData = string | Record<any, any>
type ILogType = 'log' | 'info' | 'warn' | 'trace' | 'error'

/**
 * Should be the most commonly used logger function
 *
 * for development/local dev mode only
 */
const dev = <T extends ILogData>(
  data: T,
  type: ILogType = 'info',
  groupName?: T extends string ? null : string,
  collapsed?: boolean,
) => {
  if (isDev) {
    if (typeof data === 'string') {
      debug('', `Dev Debug: ${data}`, true, type)
    } else {
      const groupNameFinal = groupName ? `Dev Debug: ${groupName}` : 'Dev Debug'
      debug(data, groupNameFinal, collapsed, type)
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
  data: ILogData,
  groupName = 'GENERAL DEBUG',
  collapsed = false,
  type: ILogType = 'log',
) {
  _group(() => log(data, type), groupName, collapsed)
}

function log(data: ILogData, type: ILogType = 'log') {
  console[type](data)
}

const logger = { dev, debug, log, nodeDev }
export default logger

// ********************************************* PRIVATE *****
function _group(logFn: () => void, name = 'GENERAL DEBUG', collapsed = false) {
  console[collapsed ? 'groupCollapsed' : 'group'](`[${name}]`)
  logFn()
  console.groupEnd()
}
