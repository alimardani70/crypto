import React, { useEffect, useState } from 'react'
import Select from 'components/form/Select'
import useAxiosGet from 'hooks/use-axiosGet'

type categoryRequestType = {
  category_id: string
  name: string
}
type categoryType = {
  value: string
  label: string
}

type propsType = {
  onChange: (data: any) => void
}

const Category: React.FC<propsType> = ({ onChange }) => {
  const { isLoading, error, sendRequest: getCategories } = useAxiosGet()
  const [categories, setCategories] = useState<categoryType[] | []>([])

  /*  useEffect(() => {
    const applyCategories = (data: any) => {
      let allCategories: any = []
      data.map((item: categoryRequestType) => {
        allCategories.push({
          value: item.category_id,
          label: item.name,
        })
      })
      console.log(allCategories)
      setCategories(allCategories)
    }
    getCategories(
      'https://api.coingecko.com/api/v3/coins/categories/list',
      applyCategories
    )
  }, [getCategories])*/

  useEffect(() => {
    setCategories([
      { value: 'aave-tokens', label: 'Aave Tokens' },
      { value: 'algorand-ecosystem', label: 'Algorand Ecosystem' },
      { value: 'analytics', label: 'Analytics' },
      { value: 'aptos-ecosystem', label: 'Aptos Ecosystem' },
      { value: 'arbitrum-ecosystem', label: 'Arbitrum Ecosystem' },
      { value: 'arbitrum-nova-ecosystem', label: 'Arbitrum Nova Ecosystem' },
      {
        value: 'artificial-intelligence',
        label: 'Artificial Intelligence (AI)',
      },
      { value: 'asset-backed-tokens', label: 'Asset-backed Tokens' },
      {
        value: 'asset-manager',
        label: 'Asset Manager',
      },
      { value: 'augmented-reality', label: 'Augmented Reality' },
      {
        value: 'automated-market-maker-amm',
        label: 'Automated Market Maker (AMM)',
      },
      { value: 'avalanche-ecosystem', label: 'Avalanche Ecosystem' },
      {
        value: 'axie-infinity',
        label: 'Axie Infinity',
      },
      { value: 'big-data', label: 'Big Data' },
      {
        value: 'binance-launchpool',
        label: 'Binance Launchpool',
      },
      { value: 'binance-smart-chain', label: 'BNB Chain Ecosystem' },
      {
        value: 'business-platform',
        label: 'Business Platform',
      },
      { value: 'business-services', label: 'Business Services' },
      {
        value: 'canto-ecosystem',
        label: 'Canto Ecosystem',
      },
      { value: 'cardano-ecosystem', label: 'Cardano Ecosystem' },
      {
        value: 'celer-network',
        label: 'Celer Network',
      },
      { value: 'celo-ecosystem', label: 'Celo Ecosystem' },
      {
        value: 'centralized-exchange-token-cex',
        label: 'Centralized Exchange (CEX)',
      },
      { value: 'charity', label: 'Charity' },
      {
        value: 'cny-stablecoin',
        label: 'CNY Stablecoin',
      },
      { value: 'collectibles', label: 'Collectibles' },
      {
        value: 'communication',
        label: 'Communication',
      },
      { value: 'compound-tokens', label: 'Compound Tokens' },
      {
        value: 'cosmos-ecosystem',
        label: 'Cosmos Ecosystem',
      },
      { value: 'cronos-ecosystem', label: 'Cronos Ecosystem' },
      {
        value: 'cryptocurrency',
        label: 'Cryptocurrency',
      },
      { value: 'ctokens', label: 'cToken' },
      {
        value: 'daomaker-ecosystem',
        label: 'DaoMaker Ecosystem',
      },
      {
        value: 'decentralized-exchange',
        label: 'Decentralized Exchange (DEX)',
      },
      {
        value: 'decentralized-finance-defi',
        label: 'Decentralized Finance (DeFi)',
      },
      {
        value: 'defi-index',
        label: 'DeFi Index',
      },
      { value: 'decentralized-derivatives', label: 'Derivatives' },
      {
        value: 'edgeware-ecosystem',
        label: 'Edgeware Ecosystem',
      },
      { value: 'education', label: 'Education' },
      { value: 'energy', label: 'Energy' },
      {
        value: 'entertainment',
        label: 'Entertainment',
      },
      { value: 'eco-friendly', label: 'Environment' },
      {
        value: 'etf',
        label: 'ETF',
      },
      { value: 'eth-2-0-staking', label: 'Eth 2.0 Staking' },
      {
        value: 'ethereum-ecosystem',
        label: 'Ethereum Ecosystem',
      },
      { value: 'ethereum-pos-iou', label: 'Ethereum PoS IOU' },
      {
        value: 'ethereumpow-ecosystem',
        label: 'EthereumPoW Ecosystem',
      },
      { value: 'ethereum-pow-iou', label: 'Ethereum PoW IOU' },
      {
        value: 'eur-stablecoin',
        label: 'EUR Stablecoin',
      },
      { value: 'exchange-based-tokens', label: 'Exchange-based Tokens' },
      {
        value: 'fan-token',
        label: 'Fan Token',
      },
      { value: 'fantom-ecosystem', label: 'Fantom Ecosystem' },
      {
        value: 'farming-as-a-service-faas',
        label: 'Farming-as-a-Service (FaaS)',
      },
      { value: 'finance-banking', label: 'Finance / Banking' },
      {
        value: 'fixed-interest',
        label: 'Fixed Interest',
      },
      { value: 'fractionalized-nft', label: 'Fractionalized NFT' },
      {
        value: 'gambling',
        label: 'Gambling',
      },
      { value: 'gaming', label: 'Gaming (GameFi)' },
      {
        value: 'gbp-stablecoin',
        label: 'GBP Stablecoin',
      },
      { value: 'gig-economy', label: 'Gig Economy' },
      {
        value: 'xdai-ecosystem',
        label: 'Gnosis Chain Ecosystem',
      },
      { value: 'gotchiverse', label: 'Gotchiverse' },
      {
        value: 'governance',
        label: 'Governance',
      },
      { value: 'guild-scholarship', label: 'Guild and Scholarship' },
      {
        value: 'harmony-ecosystem',
        label: 'Harmony Ecosystem',
      },
      { value: 'healthcare', label: 'Healthcare' },
      {
        value: 'heco-chain-ecosystem',
        label: 'HECO Chain Ecosystem',
      },
      { value: 'identity', label: 'Identity' },
      {
        value: 'idr-stablecoin',
        label: 'IDR Stablecoin',
      },
      { value: 'impossible-launchpad', label: 'Impossible Launchpad' },
      {
        value: 'index-coin',
        label: 'Index',
      },
      { value: 'infrastructure', label: 'Infrastructure' },
      {
        value: 'insurance',
        label: 'Insurance',
      },
      { value: 'dfinity-ecosystem', label: 'Internet Computer Ecosystem' },
      {
        value: 'internet-of-things-iot',
        label: 'Internet of Things (IOT)',
      },
      { value: 'interoperability', label: 'Interoperability' },
      {
        value: 'investment',
        label: 'Investment',
      },
      { value: 'iotex-ecosystem', label: 'IoTeX Ecosystem' },
      {
        value: 'iou-tokens',
        label: 'IOU tokens',
      },
      { value: 'jpy-stablecoin', label: 'JPY Stablecoin' },
      {
        value: 'kardiachain-ecosystem',
        label: 'KardiaChain Ecosystem',
      },
      { value: 'klaytn-ecosystem', label: 'Klaytn Ecosystem' },
      {
        value: 'kommunitas',
        label: 'Kommunitas Launchpad',
      },
      { value: 'krw-stablecoin', label: 'KRW Stablecoin' },
      { value: 'launchpad', label: 'Launchpad' },
      { value: 'layer-1', label: 'Layer 1 (L1)' },
      { value: 'layer-2', label: 'Layer 2 (L2)' },
      { value: 'legal', label: 'Legal' },
      { value: 'lending-borrowing', label: 'Lending/Borrowing' },
      { value: 'leveraged-token', label: 'Leveraged Token' },
      {
        value: 'liquid-staking-governance-tokens',
        label: 'Liquid Staking Governance Tokens',
      },
      { value: 'liquid-staking-tokens', label: 'Liquid Staking Tokens' },
      { value: 'lp-tokens', label: 'LP Tokens' },
      { value: 'manufacturing', label: 'Manufacturing' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'masternodes', label: 'Masternodes' },
      { value: 'media', label: 'Media' },
      { value: 'meme-token', label: 'Meme' },
      { value: 'metagovernance', label: 'Metagovernance' },
      { value: 'metaverse', label: 'Metaverse' },
    ])
  }, [])
  const changeHandler = (value: any) => {
    onChange(value)
  }
  return (
    <div>
      <Select
        className="w-1/3"
        isMultiple={true}
        label={'test'}
        options={categories}
        onChange={changeHandler}
      />
    </div>
  )
}

export default Category
