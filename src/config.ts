let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://wallet.getmasari.org/api/',
	trustedDaemonsAddresses:[
		'https://wallet.avyblocks.com:43734/'
	],
	phpRelay:typeof window !== 'undefined' ? true : false,
	mainnetExplorerUrl: "https://blocks.avychain.com/",
	mainnetExplorerUrlHash: "https://blocks.avychain.com/transaction.html?hash={ID}",
	mainnetExplorerUrlBlock: "https://blocks.avychain.com/block.html?height={ID}",
	testnetExplorerUrl: "http://testnet.avychain.com/",
	testnetExplorerUrlHash: "http://testnet.avychain.com/tx/{ID}",
	testnetExplorerUrlBlock: "http://testnet.avychain.com/block/{ID}",
	testnet: false,
	coinUnitPlaces: 12,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 28,
	integratedAddressPrefix: 29,
	addressPrefixTestnet: 33,
	integratedAddressPrefixTestnet: 34,
	subAddressPrefix: 52,
	subAddressPrefixTestnet: 73,
	feePerKB: new JSBigInt('400000000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 12, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'AVY',
	openAliasPrefix: "avy",
	coinName: 'Avalyn',
	coinUriPrefix: 'avalyn:',
	avgBlockTime: 60,
	maxBlockNumber: 500000000,

	donationAddresses : [
		'4gDJtPnbarEgTBjcnv9tnKHJvyJsE5phGUFecBUpXg6xed3s5Fmfc4tcY5vzANHAdxKp9jK91HVGzWGWuBMQDccXPrnDdZq',
		'4b4dt7sA1HSKnACF6EMSUs92TQ1ofaW2PG5imYKijNmUenBMmZDEWVbXZtNzLosyzKS5JF5xbAFuoAwkXTYn7tWT76XL67n',
		'4bppZu62Kt6EimFW1nztZb5VE7YQXd8qfjcscRmkepxNV3FUtsReen3CmgJmi5h3dBFHhcSVnXL39gQB3LSDfC2Z7fAdi8m',
		'4bcPtZ8hmYGN7CpC2y2Zh5eppa37mX7uagFzkVCRDSdxUhHddR2Fjcid1nHLaw6sPzTBV74tsLtgjNEqxL5k3w5b7Nc9NbW'
	]
};
