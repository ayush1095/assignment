
 //call the fetch function
fetch('https://reqres.in/api/users?page=2')
  .then(res => res.json())//response type
  .then(data => fillHTML(data)); //log the data;

fillHTML = (data) => {
  console.log("dataaaa", data);
 

  const extra = document.getElementById('count');

  //page
  const page = document.createElement('span');
  page.className = 'extra-data';
  // page.innerHTML = "Pages "+'<br>'+data.page;
  const pagecf = document.createElement('span');
  pagecf.className = 'half';
  pagecf.innerHTML = "Pages";

  const pagecs = document.createElement('span');
  pagecs.className = 'half';
  pagecs.innerHTML = data.page;

  page.append(pagecf);
  page.append(pagecs);
  extra.append(page);

  //perpage

  const perPage = document.createElement('span');
  perPage.className = 'extra-data';
  // perPage.innerHTML = "Per Page "+'<br>'+data.per_page;
  const ppagecf = document.createElement('span');
  ppagecf.className = 'half';
  ppagecf.innerHTML = "Per Page";


  const ppagecs = document.createElement('span');
  ppagecs.className = 'half';
  ppagecs.innerHTML = data.per_page;

  perPage.append(ppagecf);
  perPage.append(ppagecs);

  extra.append(perPage);

  //total

  const total = document.createElement('span');
  total.className = 'extra-data';
  // total.innerHTML = "Total"+'<br>'+data.total;

  const totalcf = document.createElement('span');
  totalcf.className = 'half';
  totalcf.innerHTML = "Total";


  const totalcs = document.createElement('span');
  totalcs.className = 'half';
  totalcs.innerHTML = data.total;

  total.append(totalcf);
  total.append(totalcs);

  extra.append(total);


  //total pages
  const total_pages = document.createElement('span');
  total_pages.className = 'extra-data';
  // total_pages.innerHTML = "Total Pages"+'<br>'+data.total_pages;
  const ptotalcf = document.createElement('span');
  ptotalcf.className = 'half';
  ptotalcf.innerHTML = "Total Pages";


  const ptotalcs = document.createElement('span');
  ptotalcs.className = 'half';
  ptotalcs.innerHTML = data.total_pages;

  total_pages.append(ptotalcf);
  total_pages.append(ptotalcs);

  extra.append(total_pages);

  const ul = document.getElementById('apidata');
  const details = data.data;
  console.log("details", details);

  details.forEach(data => {
    ul.append(createHTML(data));
  });
}

createHTML = (data) => {
  const li = document.createElement('li');

  const lispan = document.createElement('span');
  lispan.className = 'lispan';

  const image = document.createElement('img');
  image.className = 'data-img';
  image.src = data.avatar;

  lispan.appendChild(image);
  li.append(image);

  const name = document.createElement('h1');
  name.innerHTML = data.first_name+' '+data.last_name;
  li.append(name);

  const id = document.createElement('p');
  id.innerHTML = 'Designation';
  li.append(id);

  return li
}