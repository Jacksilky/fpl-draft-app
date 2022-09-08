import React from 'react'
import CustomAccordion from './CustomAccordion'
import ItemCard from './ItemCard'

const players = [
    {
      "title": "Everett Santos in excepteur",
      "description": "ex ut sint aute sit mollit nisi reprehenderit commodo aliquip nulla quis sit in fugiat commodo excepteur id sunt do enim aliqua laboris cillum ipsum dolor do irure veniam ea pariatur laboris consequat ipsum laborum esse consectetur nulla eiusmod adipisicing non aute aliqua ex adipisicing laboris voluptate aliquip nisi aliquip ea commodo ut in deserunt",
      "image": "https://preview.redd.it/jr7p22aq00g71.jpg?width=640&crop=smart&auto=webp&s=17c35afbe0abd70fb65ff55a89790c0cfc5a5e75",
      "tags": [
        "dolor",
        "exercitation",
        "nisi",
        "adipisicing"
      ]
    },
    {
      "title": "Clark Sharp enim",
      "description": "dolore magna quis dolore commodo aute tempor qui adipisicing est ad eu aliquip ipsum anim dolore duis",
      "image": "https://preview.redd.it/7qt4qw0hdyf71.jpg?width=640&crop=smart&auto=webp&s=4e66886c6b9357a800d510c14217a6aa939330c0",
      "tags": [
        "officia",
        "voluptate",
        "velit",
        "dolor"
      ]
    },
    {
      "title": "Moreno Le elit eu",
      "description": "occaecat laboris non enim aute voluptate officia dolore Lorem id do cillum ipsum amet pariatur commodo incididunt commodo adipisicing enim ut dolore tempor commodo ea",
      "image": "https://preview.redd.it/4peb75jjzvf71.jpg?width=640&crop=smart&auto=webp&s=2a06bbd4e5f5887a03f9a4cb9d26be90edf23eea",
      "tags": [
        "duis",
        "officia",
        "Lorem",
        "ex"
      ]
    },
    {
      "title": "Noemi Robinson eu tempor nulla",
      "description": "quis deserunt occaecat ipsum sit culpa nulla irure consequat laboris id ad commodo anim proident in excepteur cupidatat duis sunt eu elit duis aliquip amet nulla cillum id enim reprehenderit laborum do reprehenderit duis nisi et commodo voluptate amet ullamco labore dolore adipisicing nisi ullamco eu pariatur cillum proident labore occaecat deserunt sunt ex aliquip",
      "image": "https://preview.redd.it/qemy67uqyzf71.jpg?width=640&crop=smart&auto=webp&s=3659a2ec5e9a7cabbfac1478a3a190311f823641",
      "tags": [
        "ipsum",
        "Lorem",
        "qui",
        "sint"
      ]
    },
    {
      "title": "Ebony Dillard ullamco",
      "description": "tempor enim mollit consectetur ex veniam laboris laborum tempor amet Lorem consequat reprehenderit duis sint consequat enim",
      "image": "https://preview.redd.it/p1c2oex81zf71.jpg?width=640&crop=smart&auto=webp&s=3950f4d3a294bd0bd49d72aea91cbac35515b0e2",
      "tags": [
        "ullamco",
        "ullamco",
        "commodo",
        "ex"
      ]
    },
    {
      "title": "Lea Mcintosh ut proident nostrud",
      "description": "occaecat reprehenderit proident cupidatat excepteur laboris pariatur ipsum sunt incididunt pariatur ut duis duis sit sunt elit non mollit velit nisi nulla ullamco esse quis enim quis ut occaecat tempor labore",
      "image": "https://preview.redd.it/qemy67uqyzf71.jpg?width=640&crop=smart&auto=webp&s=3659a2ec5e9a7cabbfac1478a3a190311f823641",
      "tags": [
        "voluptate",
        "ad",
        "qui",
        "officia"
      ]
    },
    {
      "title": "Lowery Wooten et est",
      "description": "incididunt mollit id sint mollit irure et occaecat deserunt culpa ut mollit nulla aliqua minim aliqua tempor ad proident laboris mollit do do nulla ad",
      "image": "https://preview.redd.it/p1c2oex81zf71.jpg?width=640&crop=smart&auto=webp&s=3950f4d3a294bd0bd49d72aea91cbac35515b0e2",
      "tags": [
        "commodo",
        "incididunt",
        "cillum",
        "nisi"
      ]
    },
    {
      "title": "Etta Sparks sunt sunt eiusmod duis",
      "description": "voluptate dolore officia sunt excepteur et ipsum in sint velit tempor duis officia ad mollit reprehenderit do",
      "image": "https://preview.redd.it/p1c2oex81zf71.jpg?width=640&crop=smart&auto=webp&s=3950f4d3a294bd0bd49d72aea91cbac35515b0e2",
      "tags": [
        "non",
        "duis",
        "esse",
        "commodo"
      ]
    },
    {
      "title": "Jarvis Short laborum aliquip ut",
      "description": "sit veniam incididunt sunt velit laboris sint quis officia est velit ullamco ad occaecat est officia elit laborum eu aute reprehenderit dolor tempor laborum ullamco",
      "image": "https://preview.redd.it/qemy67uqyzf71.jpg?width=640&crop=smart&auto=webp&s=3659a2ec5e9a7cabbfac1478a3a190311f823641",
      "tags": [
        "laborum",
        "dolore",
        "dolor",
        "officia"
      ]
    },
    {
      "title": "Vinson Sanders dolor nostrud veniam deserunt",
      "description": "elit est ullamco ut magna aute adipisicing consequat veniam anim tempor anim ut ea do adipisicing magna eiusmod velit proident mollit pariatur do culpa minim",
      "image": "https://preview.redd.it/qemy67uqyzf71.jpg?width=640&crop=smart&auto=webp&s=3659a2ec5e9a7cabbfac1478a3a190311f823641",
      "tags": [
        "consectetur",
        "incididunt",
        "in",
        "laborum"
      ]
    },
    {
      "title": "Terrie Dejesus velit fugiat proident",
      "description": "occaecat dolore officia aliquip officia deserunt et est laboris cillum dolor cupidatat sunt ut dolore minim consectetur proident ut nisi ut enim consequat occaecat proident excepteur laborum consectetur laboris consequat dolore",
      "image": "https://preview.redd.it/4peb75jjzvf71.jpg?width=640&crop=smart&auto=webp&s=2a06bbd4e5f5887a03f9a4cb9d26be90edf23eea",
      "tags": [
        "labore",
        "ea",
        "fugiat",
        "minim"
      ]
    },
    {
      "title": "Elise Holder est et officia",
      "description": "laboris velit incididunt anim ipsum eiusmod nulla aliquip ipsum irure consequat laborum deserunt ea sunt nisi laborum veniam excepteur nisi cillum fugiat esse duis deserunt officia sunt quis velit officia ipsum",
      "image": "https://preview.redd.it/8uz4efojzzf71.jpg?width=640&crop=smart&auto=webp&s=81ad24626486571e4c96dc1f98105674deae37bb",
      "tags": [
        "id",
        "ullamco",
        "irure",
        "esse"
      ]
    },
    {
      "title": "Hickman Mayer officia nulla non est",
      "description": "Lorem exercitation cillum commodo cupidatat proident nostrud ad aliquip officia sint voluptate dolore amet sunt anim nisi",
      "image": "https://preview.redd.it/qemy67uqyzf71.jpg?width=640&crop=smart&auto=webp&s=3659a2ec5e9a7cabbfac1478a3a190311f823641",
      "tags": [
        "esse",
        "commodo",
        "ipsum",
        "nulla"
      ]
    },
    {
      "title": "Florine Haley tempor nulla",
      "description": "qui labore laboris veniam laboris proident nulla aute laboris dolor laborum fugiat exercitation laboris aliqua aute sunt adipisicing quis consequat adipisicing tempor proident id ad voluptate commodo amet quis magna commodo pariatur aliqua et adipisicing tempor culpa tempor aliquip veniam proident magna consectetur excepteur quis nisi sunt tempor sunt nulla ad deserunt velit qui et",
      "image": "https://preview.redd.it/ei2u1phsrxf71.jpg?width=640&crop=smart&auto=webp&s=3a2a823a494ca86a58f224712cba2cdc28759a1b",
      "tags": [
        "consectetur",
        "ipsum",
        "officia",
        "proident"
      ]
    },
    {
      "title": "Ella Coffey eiusmod nulla excepteur consectetur",
      "description": "veniam voluptate amet exercitation commodo consequat irure exercitation excepteur commodo esse Lorem veniam veniam id qui aute",
      "image": "https://preview.redd.it/qemy67uqyzf71.jpg?width=640&crop=smart&auto=webp&s=3659a2ec5e9a7cabbfac1478a3a190311f823641",
      "tags": [
        "ut",
        "officia",
        "voluptate",
        "mollit"
      ]
    },
    {
      "title": "Vanessa Campos sint",
      "description": "cillum enim tempor labore reprehenderit ea nisi aliquip voluptate incididunt ex ipsum cupidatat veniam laborum esse voluptate",
      "image": "https://preview.redd.it/qemy67uqyzf71.jpg?width=640&crop=smart&auto=webp&s=3659a2ec5e9a7cabbfac1478a3a190311f823641",
      "tags": [
        "sunt",
        "dolor",
        "voluptate",
        "consequat"
      ]
    },
    {
      "title": "Alba Jackson excepteur elit anim ipsum",
      "description": "et incididunt Lorem tempor dolore incididunt deserunt laboris reprehenderit amet anim pariatur aliquip quis velit eu ad sunt deserunt qui aliquip voluptate aliqua consectetur nulla",
      "image": "https://preview.redd.it/7qt4qw0hdyf71.jpg?width=640&crop=smart&auto=webp&s=4e66886c6b9357a800d510c14217a6aa939330c0",
      "tags": [
        "adipisicing",
        "mollit",
        "est",
        "commodo"
      ]
    },
    {
      "title": "Deanne Boyd eu commodo aute",
      "description": "esse nostrud minim qui aliqua esse excepteur dolore consequat incididunt aute irure cillum eiusmod aliquip exercitation proident",
      "image": "https://preview.redd.it/7qt4qw0hdyf71.jpg?width=640&crop=smart&auto=webp&s=4e66886c6b9357a800d510c14217a6aa939330c0",
      "tags": [
        "occaecat",
        "ipsum",
        "anim",
        "eu"
      ]
    }
  ]

const ResultsPage = () => {
    return (
      <div class="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          <div className="row-span-6 w-60 hidden sm:block mx-auto flex-shrink">
            <CustomAccordion options={4}/>
            <CustomAccordion options={2}/>
            <CustomAccordion options={3}/>
            <CustomAccordion options={1}/>
            <CustomAccordion options={3}/>
          </div>
          {players.map( player => (
            <ItemCard classname="flex-1" player={player}/>
            ))}
        </div> 
    </div>
        
    )
}

export default ResultsPage
