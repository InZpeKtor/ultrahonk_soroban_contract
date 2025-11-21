import * as Client from 'guess_the_puzzle';
import { rpcUrl } from './util';

export default new Client.Client({
  networkPassphrase: 'Standalone Network ; February 2017',
  contractId: 'CBQO67T7EWLCE3GL2QTLDPAJNUGLOEUGVXRY6ZWZWWZ7TEAXEOWOQ3QQ',
  rpcUrl,
  allowHttp: true,
  publicKey: undefined,
});
