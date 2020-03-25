module.exports = {
  store(team) {
    const teams = ['flamengo'];
    if (teams.includes(team)) return false;

    teams.push(team);
    return true;
  },
};
