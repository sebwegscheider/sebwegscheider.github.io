  document.querySelector('h1.product-details-header__title').id = 'productfamilyheader';
  // Create a new element
  var newNode = document.createElement('table');
  newNode.classList.add("details-table");
  // Get the reference node
  var referenceNode = document.querySelector('h3.product-dimensions__title');
  // Insert the new node before the reference node
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  newNode.innerHTML = '<thead>     <tr class="details-firstrow englishonly">            <th>Description</th>            <th>Article no.</th>            <th>Datasheet</th>            <th>Photometry</th>            <th>Installation guide</th>            <th>EC-Declaration</th>        </tr>        <tr class="details-firstrow germanonly">            <th>Beschreibung</th>            <th>Art.Nr.</th>            <th>Datenblatt</th>            <th>Photometrie</th>            <th>Montageanleitung</th>            <th>EG-Erklärung</th>        </tr>        <tr class="details-firstrow czechonly">            <th>Popis</th>            <th>Objednací č</th>            <th>Datový List</th>            <th>Fotometrie</th>            <th>Montážní návod</th>            <th>Prohlášení o shode CE</th>        </tr>        <tr class="details-firstrow frenchonly">            <th>Désignation</th>            <th>Référence</th>            <th>Fiche technique</th>            <th>Photométrie</th>            <th>Notice de montage</th>            <th>Déclaration CE</th>        </tr>  </thead> <tbody></tbody>';