export declare const FACTORY_ADDRESS = '0xfCA1AEf282A99390B62Ca8416a68F5747716260c'
export declare const FACTORY_ADDRESS_MAP: {
  84532: string
  167000: string
}
export declare const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export declare const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const TICK_SPACINGS: {
  [amount in FeeAmount]: number
}
