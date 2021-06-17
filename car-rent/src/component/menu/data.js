
export const menu = async() => {
  const resp = await fetch('/api/cars');
  const data = await resp.json()
  return true;
} 





// const menu = [
//   {
//     id: 1,
//     car_name: 'buttermilk pancakes',
//     car_type: 'pickup',
//     price: 15.99,
//     img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
   
//   },
//   {
//     id: 2,
//     car_name: 'diner double',
//     car_type: 'van',
//     price: 13.99,
//     img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    
//   },
//   {
//     id: 3,
//     car_name: 'godzilla milkshake',
//     car_type: 'truck',
//     price: 6.99,
//     img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  
//   },
//   {
//     id: 4,
//     car_name: 'country delight',
//     car_type: 'van',
//     price: 20.99,
//     img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
   
//   },
//   {
//     id: 5,
//     car_name: 'egg attack',
//     car_type: 'sedan',
//     price: 22.99,
//     img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    
//   },
//   {
//     id: 6,
//     car_name: 'oreo dream',
//     car_type: 'sedan',
//     price: 18.99,
//     img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    
//   },
//   {
//     id: 7,
//     car_name: 'bacon overflow',
//     car_type: 'truck',
//     price: 8.99,
//     img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    
//   },
//   {
//     id: 8,
//     car_name: 'american classic',
//     car_type: 'truck',
//     price: 12.99,
//     img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    
//   },
//   {
//     id: 9,
//     car_name: 'quarantine buddy',
//     car_type: 'sedan',
//     price: 16.99,
//     img: 'https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   },
// ];
export default menu;
