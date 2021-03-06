const iconset = require('../../../tokens/generated/icons.json');

const variants = iconset.reduce((acc, item, index) => {
  itemName = index == 0 ? 'default' : item;
  itemLabel = item;

  acc.push({
    name: itemName,
    label: item,
    context: {
      svgId: 'ys-icon-' + item
    },
  });

  return acc;
}, []);

module.exports = {
  status: "wip",
  preview: "@element-preview",
  context: {
  },
  collated: true,
  variants
};
