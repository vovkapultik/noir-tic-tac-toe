# Tic Tac Toe using Noir

### Guide:
- prerequisites:
  - Truffle (worked on v5.5.9)
  - Nargo (Noir) (worked on v0.10.5)
  - Python3 (worked on v3.11.5)
  - ganache-cli (worked on v6.12.2 with ganache-core v2.13.2)

---

**Step 1:**
Play the Tic Tac Toe game:
``` cd interface && python3 tic-tac-toe.py ```

You will get an output like:
```
Your public inputs are:
 - game: 306
 - winner: 0
Your proof is: 2a4d8a9be7...44f61e9a29bf7

This data was saved to ../zk/Prover.toml and ../zk/proofs/noirTicTacToe.proof respectively.

Now run `cd ../zk && truffle test`
```

**Step 2:** Follow the output and run ``` cd ../zk && truffle test ```

If everything was correct, you will get an output like:
```
Correct data test:
  Verifier deployment:
    ✔ Deployed successfully (63ms)
  Proving a correct game result:
    ✔ Proved successfully (343ms)
  Proving an incorrect game result:
    ✔ Proved unsuccessfully (425ms)

3 passing (847ms)
```