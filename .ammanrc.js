'use strict';
// @ts-check

const path = require('path');
const localDeployDir = path.join(__dirname, 'test-programs');
const { LOCALHOST, tmpLedgerDir } = require('@metaplex-foundation/amman');
function localDeployPath(programName) {
    return path.join(localDeployDir, `${programName}.so`);
  }

  const programs = {
    metadata: {
      label: 'Metadata',
      programId: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
      deployPath: localDeployPath('mpl_token_metadata'),
    },
    trifle: {
        label: 'Trifle',
        programId: 'trifMWutwBxkSuatmpPVnEe7NoE3BJKgjVi8sSyoXWX',
        deployPath: localDeployPath('mpl_trifle'),
    },
  };

const validator = {
    killRunningValidators: true,
    programs,
    commitment: 'singleGossip',
    resetLedger: true,
    verifyFees: false,
    jsonRpcUrl: LOCALHOST,
    websocketUrl: '',
    ledgerDir: tmpLedgerDir(),
    programs: [programs.metadata, programs.trifle],
};

const storage = {
    enabled: true,
    storageId: 'mock-storage',
    clearOnStart: true,
};

module.exports = { validator, storage };