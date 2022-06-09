import eccsa from "elliptic";
export const random = () => {
  const ec = eccsa.ec("secp256k1");
  return ec.genKeyPair().getPrivate().toString();
};
