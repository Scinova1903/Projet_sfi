document.addEventListener("mousemove", mouseMoveHandler, false);
const Babas = document.querySelectorAll(".miam_miam")

function mouseMoveHandler(e) {
    Babas.forEach(Baba => {
        const relativeX = e.clientX;
        const relativeY = e.clientY;
        const BabaPos = Baba.getBoundingClientRect();
        let BabaX = BabaPos.left;
        let BabaY = BabaPos.top;
        const BabaCenter = [BabaPos.left + Baba.width / 2, BabaPos.top + Baba.height / 2]
        const BabaAngle = Math.atan2((relativeY - BabaCenter[1]), (relativeX - BabaCenter[0])) * (360 / Math.PI);
        Baba.style.top = `${relativeY}px`;
        Baba.style.left = `${relativeX}px`;
        Baba.style.transform = `rotate(${BabaAngle}deg)`;

    });

}