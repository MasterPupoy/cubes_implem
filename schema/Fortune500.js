cube(`Fortune500`, {
  sql: `SELECT * FROM public.fortune500`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      sql: 'company',
      type: `count`,
    },

    total_revenue: {
      sql:'revenue',
      type: `runningTotal`,
      drillMembers: [company]
    },

    total_profit: {
      sql: 'profit',
      type: `runningTotal`,
      drillMembers: [company, rank]
    }
  },
  
  dimensions: {
    company: {
      sql: `company`,
      type: `string`
    },
    
    revenue: {
      sql: `revenue`,
      type: `string`
    },
    
    profit: {
      sql: `profit`,
      type: `string`
    },
    
    rank: {
      sql: `rank`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
