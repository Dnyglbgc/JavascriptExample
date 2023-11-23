const addform=document.querySelector('.add');
const list=document.querySelector('.todos')
const search=document.querySelector('.search input');

//Listeye yeni madde ekleme
const generateTemplate= newtodo=>{

    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${newtodo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li> `
   ;

  list.innerHTML +=html;
};


//Listeye Ekleme 
addform.addEventListener('submit', e=>{
e.preventDefault();
//Başındaki boşlukları siler(trim)
const newtodo=addform.add.value.trim();

if (newtodo.length)//Girilen karakter sıfırdan büyük mü diye kontrol eder
 {
    //Yeni işi listeye eklemek için gönderir
    generateTemplate(newtodo); 

    //Ekleme işleminden sonra inputu temizler
    addform.reset();
 }
});
   
//Listeden Silme 
list.addEventListener('click', e=>{

    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }

});

 const filtertodos=term=>{

    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo =>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo=>todo.textContent.includes(term))
    .forEach(todo=>todo.classList.remove('filtered'));
 }

search.addEventListener('keyup',()=>{

    const term=search.value.trim().toLowerCase();
   
    filtertodos(term);
})
