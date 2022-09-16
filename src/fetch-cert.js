// Requires:
// - openssl
// - grep
// - sed

const use = ({exec}) => {
  return ({
    fetchNotAfter: async (domain, port) => {
      let stdout = '';
      const options = {};
      options.listeners = {
        stdout: (data) => {
          stdout += data.toString();
        },
        stderr: (data) => {
          stdout += data.toString();
        }
      }
      const command = `echo \
        | openssl s_client -servername ${domain} -connect ${domain}:${port} 2>/dev/null \
        | openssl x509 -noout -dates \
        | grep notAfter \
        | sed 's/notAfter=//'
      `
      await exec.exec("/bin/bash", ["-c", command], options);
      return new Date(stdout);
    }
  });
}

module.exports = {
  use
}
