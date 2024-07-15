const strategiesDB = {
  productSeeding: {
    title: "Product Seeding",
    desc: "Send free products to influencers in exchange for genuine reviews and to build new partnerships"
  },
  userGeneratedContent: {
    title: "User-Generated Content",
    desc: "Find creators to produce authentic, fully-licensed UGC for both organic and paid social channels."
  },
  influencerPosts: {
    title: "Influencer Posts",
    desc: "Collaborate with influencers who resonate with your brand to post content to their audiences" 
  },
  conversionSales: {
    title: "Conversion & Sales",
    desc: "Conversion & Sales"
  },
  tiktokSparkAds: {
    title: "TikTok Spark Ads",
    desc: "Partner with influencers to create engaging content and turn top-performing content into Spark Ads"
  },
  metaWhitelistedAds: {
    title: "Meta Whitelisted Ads",
    desc: "Use influencers' handles on Meta to create sponsored content and earn money for your brand"
  },
  tikTokShop: {
    title: "TikTok Shop",
    desc: "Work directly with TikTok Shop affiliates to create shoppable videos that drive immediate sales"
  },
  affiliateCampaigns: {
    title: "Affiliate Campaigns",
    desc: "Collaborate with influencer affiliates to promote products and pay commissions on sales"
  }
}

export const relationships = {
  ugc: [
    strategiesDB.userGeneratedContent
  ],
  awareness: [
    strategiesDB.influencerPosts, strategiesDB.productSeeding, strategiesDB.tiktokSparkAds, strategiesDB.metaWhitelistedAds
  ],
  conversion: [
    strategiesDB.affiliateCampaigns, strategiesDB.tikTokShop, strategiesDB.tiktokSparkAds, strategiesDB.metaWhitelistedAds
  ]
}

export default strategiesDB;
