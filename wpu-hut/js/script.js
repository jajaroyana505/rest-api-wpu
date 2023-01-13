function tampilSemuaMenu(){
   $.getJSON('data/pizza.json', (data)=>{
      // console.log(data)
      var menu =data.menu
      $.each(menu, (i,menu) =>{
         $('#daftar-menu').append('<div class="col-md-4 mb-4"><div class="card"><img src="img/pizza/'+menu.gambar+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+menu.nama+'</h5><p class="card-text">'+menu.deskripsi+'</p><h5 class="card-title">Harga Rp.'+menu.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div> </div>')
      })
   })
}

tampilSemuaMenu()
$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active')
    $(this).addClass('active')

    var kategori = $(this).html()
    $('h1').html(kategori)

    if(kategori== 'All Menu'){
      tampilSemuaMenu()
      return
    }

    $.getJSON('data/pizza.json', (data)=>{
      var menu = data.menu
      let content = ''
      
      $.each(menu, function(i,menu){
         if(menu.kategori == kategori.toLowerCase()){
            console.log(menu.kategori)
            console.log(kategori.toLowerCase())
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="img/pizza/'+menu.gambar+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+menu.nama+'</h5><p class="card-text">'+menu.deskripsi+'</p><h5 class="card-title">Harga Rp.'+menu.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div> </div>'
            
         }
      })
      
      $('#daftar-menu').html(content)
      console.log(content)
   })
})