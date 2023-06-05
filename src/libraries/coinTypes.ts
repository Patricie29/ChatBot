
export interface ResponseData {
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number
    price_change_percentage_24h: number
    price_change_percentage_7d_in_currency: number
    id: string
    market_cap_rank: number
    sparkline_in_7d: { price: number[] };
}

export interface CardData {
    symbol: string;
    name: string;
    image: string;
    currentPrice: number;
    marketCap: number;
    priceChange: number;
    id: string
    marketRank: number
    chartData: number[]
    priceChange7d: number
}



export interface ResponseDetailsData {
    symbol: string;
    name: string;
    image: { large: string };
    id: string;
    description: { en: string };
    market_cap_rank: number;
    market_data: {
        ath: { usd: number };
        current_price: { usd: number };
        market_cap: { usd: number };
        fully_diluted_valuation: { usd: number };
        total_volume: { usd: number };
        price_change_percentage_24h: number;
        price_change_percentage_1y: number;
        circulating_supply: number;
        sparkline_7d: { price: number[] };
    };
}

export interface ResponseDetailChartData {
    x: number;
    y: string;
}


export interface ResponseTrendingData {
    coins: {
        item: {
            name: string;
            market_cap_rank: number;
            large: string;
            slug: string;
        };
    }[];
}

export interface TrendingData {
    name: string;
    market_cap_rank: number;
    large: string;
    slug: string;
}

