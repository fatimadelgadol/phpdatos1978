function guardar ()
{
db.collection("imc").add({
 
    nombre: document.getElementById("nombre").value,
    peso: document.getElementById("peso").value,
    altura: document.getElementById("altura").value,
    resultado: document.getElementById("resultado").value,
    leyenda: document.getElementById("leyenda").value

    
    
})
.then((docRef) => {
    //console.log("Document written with ID: ", docRef.id);
    alert("REGISTRO GUARDADO")
})
.catch((error) => {
    //console.error("Error adding document: ", error);
    alert("HUBO UN ERROR")
});
}

const resultadosFirebase = document.getElementById("f1");
function consultar()
{
  resultadosFirebase.innerHTML=""
    db.collection("imc").get().then((Datos) => 
    {
        Datos.forEach((doc) => 
        {
            const filas = doc.data();
            resultadosFirebase.innerHTML += `
           <div class="card card-body mt-3 border-primary">
                <h3 class="h5">Nombre: ${filas.nombre}</h3>
                <p>Peso:${filas.peso}</p>
                <p>Altura: ${filas.altura}</p>
                <p>Resultado: ${filas.resultado}</p>
                <p>Leyenda: ${filas.leyenda}</p>
                <div>
                <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
                    Volver
                </button>
                </div>
            </div>`;

        });
    });
}
