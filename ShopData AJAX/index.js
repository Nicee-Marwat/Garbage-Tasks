document.querySelector("button").addEventListener("click", () => {
    var http = new XMLHttpRequest();
            http.onload = function(){
                if(http.status == 200){
                    var shopData = JSON.parse(http.response);
                    var counter = 0;
                    console.log(shopData)

          // function createe(tbody, tr, product, prop) {
          //   var td1 = document.createElement("td");
          //   if (`${prop}` === "image") {
          //     console.log('yes')
          //     td1.classList.add("side");
          //     var image = document.createElement("img");
          //     image.classList.add("imag");
          //     image.src = product[prop];
          //     td1.appendChild(image);
          //     tr.appendChild(td1);
          //   } else {
          //     td1.innerHTML = product[prop];
          //     tr.appendChild(td1);
          //   }
          //   tbody.appendChild(tr);
          // }

            if (counter == 0) {
              var tbody = document.createElement("tbody");
              tbody.classList.add("border-1");
              document.querySelector("table").appendChild(tbody);
              counter++;
            }

            var data = '';
            for (var value of shopData) {
              // var tr = document.createElement("tr");
              // createe(tbody, tr, value, 'title');
              // createe(tbody, tr, value, 'price');
              // createe(tbody, tr, value, 'image');

              data += `<tr>
                  <td>${value.title}</td>
                  <td>${value.price}</td>
                  <td><img src='${value.image}'></td>
                      </tr>`;
                  }
                  // document.querySelector('table').innerHTML = data;
                  tbody.innerHTML = data;
                  //   console.log(data);

                }
                else
                {
                  alert('Api link not Found')
                }
            }
            http.open('GET', 'https://fakestoreapi.com/products', true);
            http.send();
          });