// let a = 5
// let b = a
// b = 6

// console.log(a)
// console.log(b)


const a = [
    {id: 1, name: 'aaa'},
    {id: 2, name: 'ffffff'},
]
const b = [...a.map( aa => 
    aa.id === 1?
        {
            ...aa,
            name: 'jjjjjjjjjjj'
        }:
    aa
)]


// const b = a
// b[0].sss = 'ddd'

console.log(a)
console.log(b)




// const a = {sss: 'aaa'}
// const b = {...a}
// b.sss = 'ddd'

// console.log(a)
// console.log(b)




const aa = 'name'

const bb = {
    id: 0,
    name: 'sdds'
}

bb[aa] = 'rhrehgrth'

bb.map(bbb =>
    bbb.id === 0?
        {
            ...bbb,
            aa: 'ddd'
        }:
        bbb

)

console.log(bb)


{
    id:'',
    name: '',
    aa: ''
}