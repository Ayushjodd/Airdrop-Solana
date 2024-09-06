import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Button } from "./Button";
import toast, { Toaster } from "react-hot-toast";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirDropToUser() {
    if (!wallet.publicKey) {
      toast.error("Please connect your wallet first!");
      return;
    }

    const amount = document.getElementById("publicKey").value;

    try {
      await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
      toast.success("Solana airdropped successfully!");
    } catch (error) {
      toast.error("Airdrop failed! Please try again.");
      console.error("Airdrop error:", error);
    }
  }

  return (
    <>
      <Toaster />
      <div className="flex flex-col min-h-[100dvh] text-white">
        <header className="px-4 lg:px-6 h-14 flex items-center shadow-lg my-5 pb-5 justify-between mx-20">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/12533/12533941.png"
              className="h-11 w-11 mr-1"
              alt="Solana Logo"
            />
            <span className="font-semibold text-2xl text-[#fec107]">
              Solana Airdrop
            </span>
          </div>
          <div className="flex gap-5">
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-lg space-y-4">
            <div className="items-center gap-4 flex">
              <input
                id="publicKey"
                type="number"
                min="1"
                max="5"
                placeholder="Amount of Solana"
                className="w-72 mt-5 py-2 rounded-lg bg-[#0d0d0f] focus:outline-none px-4 border border-gray-400 focus:ring-2 focus:ring-white"
              />
              <Button onClick={sendAirDropToUser}>Airdrop Solana</Button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Airdrop;
