  document.querySelector('h1.product-details-header__title').id = 'productfamilyheader';
  // Create a new element
  var newNode = document.createElement('table');
  newNode.classList.add("details-table");
  // Get the reference node
  var referenceNode = document.querySelector('h3.product-dimensions__title');
  // Insert the new node before the reference node
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  newNode.innerHTML = '<thead> <tr class="details-firstrow frenchonly"> <th>Désignation</th> <th>Référence</th> <th>Fiche technique</th> <th>Photométrie</th> <th>Notice de montage</th> <th>Déclaration CE</th> </tr> </thead> <tbody></tbody>';