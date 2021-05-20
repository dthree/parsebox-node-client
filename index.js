import request from "./lib/request.js";

const parsebox = {
  box(boxId) {
    return {
      async exec(input) {
        const url = `https://parsebox.io/${boxId}/api`;
        return await request.post(url, {
          json: { input }
        });
      }
    }
  }
}

export default parsebox;