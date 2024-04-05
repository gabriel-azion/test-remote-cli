addEventListener("firewall", (event) => {

  let ip = event.request.metadata["remote_addr"] // Accessing the remote address

  console.log(ip)
});