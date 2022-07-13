import React from 'react'

declare global {
  var _mongoClientPromise: Promise<MongoClient>
  var gtag: ((...args: any[]) => void) | undefined
}

declare type ValueOf<T> = T[keyof T]

/**
 * Function component with children
 */
type FCwc<T = {}> = React.FC<React.PropsWithChildren<T>>

// ****************************************** generic type with names
type IObject<T = unknown> = Record<string, T>
type IImageSource = string
type IHref = string

// type GeneralTargetType = HTMLElement | Element | Window | Document
