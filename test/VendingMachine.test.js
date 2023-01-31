const VendingMachine = artifacts.require("VendingMachine");

contract("VendingMachine", (accounts) => {
    before(async () => {
        instance = await VendingMachine.deployed()
    })

    it('ensure that the starting balance of the vanding machine is 100',async () => {
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 100, "The initial balance should be 100 donuts.")

    })

    it('ensures the blance of the vending machine is updated', async () => {
        await instance.restock(100)
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 200, "The initial balance should be 200 donuts after restocking.")

    })

    it('allows donuts to be purchased',async () => {
        await instance.purchase(1, {from: accounts[0], value: web3.utils.toWei('2','ether')})
        let balance = await instance.getVendingMachineBalance()
        assert.equal(balance, 199, "The balance should be 199 donuts after sale.")
    })
})


/*(0) 0x030CB2905637EBE468942ECc4d6Fe01dc5bdcbDc (100 ETH)
(1) 0x9700bE208d4AD7F9e8371146913F87ff1BDC85a8 (100 ETH)
(2) 0x5C769fD3C15927eb0F11dFf392533d2D114e9642 (100 ETH)
(3) 0x7A77C57D788FDe575d9a7bc66C54b834fc958488 (100 ETH)
(4) 0x4a2213B87C4CA66fa8d11517522c78c04a445127 (100 ETH)
(5) 0x9096a3defBC1C38B6474FAc16Dc2cf2731803419 (100 ETH)
(6) 0x4147D7FdE0b3AaF5C9631176ab2F6d42e2dc2522 (100 ETH)
(7) 0x6bC620027f8B26E2Bd15D563D513D0FB8437fbD9 (100 ETH)
(8) 0xfBCdefbE41D1830a8e744428ebBC4BbcbCb6a0AD (100 ETH)
(9) 0xD158714b39E2a7799Ff2473875E972cB7975dEb6 (100 ETH)
*/
