const kategori = document.getElementById("kategori");
const btnKategori = document.getElementById("btnKategori");
const headerCard = document.getElementById("headerCard");

btnKategori.addEventListener("click", function(){
    const cardKategori = document.createElement("div");
    const headerKategori = document.createElement("div");
    headerKategori.style.display = "flex";
    headerKategori.style.gap = "10px";
    headerKategori.style.alignItems = "center";
    headerKategori.style.marginBottom = "0";



    //ambil nama dan buat kategori baru
    const namaKategori = kategori.value;
    const tagKategori = document.createElement("h4");
    if (namaKategori==="") {
        alert("Silahkan Isi Kategori");
        return;
    }
    tagKategori.textContent = namaKategori;

    //button hapus disamping kategori
    const btnHapus = document.createElement("button");
    btnHapus.textContent="Hapus";
    btnHapus.addEventListener("click", function(){
        cardKategori.remove();
    })

    //button rename
    const btnRename = document.createElement("button");
    btnRename.textContent = "Rename";
    btnRename.addEventListener("click", function(){
        const kategoriBaru = prompt("Masukkan kategori :");
        if(kategoriBaru!==null&kategoriBaru!==""){
            tagKategori.textContent=kategoriBaru
        }
    })

    //button add
    const btnAdd = document.createElement("button");
    btnAdd.textContent = "Add";
    btnAdd.addEventListener("click", function(){
        //buat cardList
        const cardList = document.createElement("div");
        cardList.style.alignItems = "center";
        cardList.style.display = "flex";
        cardList.style.gap = "10px";

        //buat checkbox
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("change", function(){
            if(checkBox.checked){
                tagList.style.textDecoration = "line-through";
            }else{
                tagList.style.textDecoration = "none";
            }
        })

        //buat isi list
        const tagList = document.createElement("p");
        tagList.style.margin = "0";
        const isiList = prompt();
        tagList.textContent = isiList;


        //tambahkan ke cardList
        cardList.appendChild(checkBox);
        cardList.appendChild(tagList);

        //tambahkan ke cardKategori
        cardKategori.appendChild(cardList);


    })

    //menambahkan ke ke headerKategori
    headerKategori.appendChild(tagKategori);
    headerKategori.appendChild(btnHapus);
    headerKategori.appendChild(btnRename);
    headerKategori.appendChild(btnAdd);

    cardKategori.appendChild(headerKategori);

    //menampilkan ke frontend
    headerCard.appendChild(cardKategori);

    

})