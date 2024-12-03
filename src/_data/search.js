const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  module.exports = async function() {
  const myblogEntries = await client.getEntries({ content_type: 'myblog' });
  const writeUpsEntries = await client.getEntries({ content_type: 'writeUps' });

  // Combine and normalize data
  const searchData = [
    ...myblogEntries.items.map((item) => ({
      type: 'myblog',
      title: item.fields.Title,
      description: item.fields.Description,
      date: item.fields.DatePublished,
      
    })),
    ...writeUpsEntries.items.map((item) => ({
      type: 'writeUps',
      title: item.fields.title,
      description: item.fields.intro,
      date: item.fields.date,
      
    })),
  ];
  
  return searchData;
};
