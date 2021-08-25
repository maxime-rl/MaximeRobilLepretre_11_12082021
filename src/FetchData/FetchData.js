/**
 * Fetch data
 * @property {object} response data source
 */
export default class FetchData {
  async getAllPropertyCards() {
    /**
     * Get all property cards
     * @return {object} data
     */
    try {
      const response = await fetch("./data/data.json");

      if (response.ok) {
        const data = await response.json();

        return data;
      } else {
        throw new Error(`Erreur HTTP ! statut : ${response.status}`);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getPropertyByID(id) {
    /**
     * Get property by id
     * @return {object} current data property
     */
    try {
      const response = await fetch("../data/data.json");
      if (response.ok) {
        const data = await response.json();

        return data.find((elt) => elt.id === id);
      } else {
        throw new Error(`Erreur HTTP ! statut : ${response.status}`);
      }
    } catch (e) {
      console.log(e);
    }
  }
}
