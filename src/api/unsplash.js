import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1lIxGN6SyHYGoqsBtB-5W_s0f31CK28IqmngsI2MguE"
  }
});
