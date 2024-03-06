const dummyData = {
  showThemeSwitcher: true,
  showTicTacToe: true,
  showRandomwColor: true,
  showAccordian: false,
  showTreeView: true,
  showTabs: true,
};

export default function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyData) setTimeout(resolve(dummyData), 500);
    else reject(new Error("Error fetching data"));
  });
}
