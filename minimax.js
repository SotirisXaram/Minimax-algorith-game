const minimax = (cubes, k, isMaxTurn) => {
    if (cubes === 0) {
        return isMaxTurn ? -1 : 1;
    }

    if (isMaxTurn) {
        let bestScore = -Infinity;
        for (let i = 1; i <= k; i++) {
            if (i <= cubes) {
                const score = minimax(cubes - i, k, false);
                bestScore = Math.max(bestScore, score);
            }
        }
        return bestScore;
    } else {
        let bestScore = +Infinity;
        for (let i = 1; i <= k; i++) {
            if (i <= cubes) {
                const score = minimax(cubes - i, k, true);
                bestScore = Math.min(bestScore, score);
            }
        }
        return bestScore;
    }
}

const playGame = () => {
    let M = parseInt(prompt("Εισαγετε τον αριθμο των κυβων (M):"));
    let K = parseInt(prompt("Εισαγετε τον αριθμο Κ των κυβων που μπορουν να αφαιρεθουν :"));

    while (K <= 2 || K >= M) {
        alert("Λαθος τιμη για το K.Το K πρεπει να ειναι 2 < K < M.");
        K = parseInt(prompt("Εισαγετε τον μεγιστο αριθμο κυβων που μπορουν να αφαιρεθουν (K):"));
    }

    let cubes = M;
    let isMaxTurn = true;
    //Οσο εχουμε κυβους
    while (cubes > 0) {
        if (isMaxTurn) {
            //Η σειρα του MAX 
            let bestScore = Number.NEGATIVE_INFINITY;
            let bestMove = 0;
            for (let i = 1; i <= K; i++) {
                if (i <= cubes) {
                    const score = minimax(cubes - i, K, false);
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = i;
                    }
                }
            }
            console.log(`Το προγραμμα αφαιρεσε ${bestMove} κυβους.`);
            cubes -= bestMove;
        } else {
            //Η σειρα του MIN 
            let validMoves = [1, 2, K];
            let move = parseInt(prompt(`Εισαγετε τον αριθμο κυβων που θελετε να αφαιρεθουν (1, 2, or ${K}):`));
            while (!validMoves.includes(move) || move > cubes) {
                move = parseInt(prompt(`Μη εγκυρη κινηση. Εισαγετε τον αριθμο των κυβων (1, 2, or ${K}):`));
            }
            cubes -= move;
        }

        isMaxTurn = !isMaxTurn;
    }

    //Εχασε ο MAX 
    if (isMaxTurn) {
        console.log("Νικησατε");
    }
    //Νικησε ο MAX 
    else {
        console.log("Το προγραμμα νικησε");
    }
}

playGame();
