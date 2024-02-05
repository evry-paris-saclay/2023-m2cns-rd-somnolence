const webcamelement = document.getElementById('webcam');
let net;

async function app() {
    console.log('Loading MobileNet...');

    net = await tf.loadLayersModel('model/model.json')
    console.log('Model loaded!');
    const webcam = await tf.data.webcam(webcamelement);
    
    while (true) {
        const img = await webcam.capture();

        // Redimensionner l'image à la taille attendue du modèle (224x224)
        const resizedImg = tf.image.resizeBilinear(img, [224, 224]);

        // Ajouter une dimension de lot à l'image
        const batchedImg = resizedImg.expandDims(0);

        const result = await net.predict(batchedImg);

       console.log(result);

        img.dispose();
        resizedImg.dispose();
        batchedImg.dispose();  // Libérer la mémoire du lot d'images

        await tf.nextFrame();
    }
}

app();
