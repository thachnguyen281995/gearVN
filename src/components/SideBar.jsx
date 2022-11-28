import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Laptop Gaming', 'sub1',<Link to ="/laptopgaming"><img src="https://theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=30245" alt="" className="h-5"/></Link>, [
    getItem('Thương Hiệu', 'g1', null, [getItem('ACER / PREDATOR', '1'), getItem('ASUS / ROG', '2'),getItem('MSI', '3'),getItem('DELL', '4')], 'group'),
    getItem('Giá Bán', 'g2', null, [getItem('Dưới 20 triệu', '5'), getItem('Từ 20 đến 25 triệu', '6')], 'group'),
  ]),
  getItem('PC Gaming', 'sub2',<img src="https://theme.hstatic.net/1000026716/1000440777/14/xxx23.png?v=30266" alt="" className="h-5"/>, [
    getItem('GVN MINION - Core i3', '8'),
    getItem('GVN VIPER - Core i5', '9'),
    getItem('GVN PHANTOM - Core i7', 'sub3', null, [getItem('Phantom Plus i4080', '10'), getItem('Phantom Plus i3080Ti', '11')]),
  ]),
  getItem('Apple', 'sub4', <Link to="/apple"><img src="//theme.hstatic.net/1000026716/1000440777/14/xxxmb28.png?v=30266" className='h-6'/></Link>, [
    getItem('MacBook', '12'),
    getItem('iMac', '13'),
    getItem('Mac mini', '14'),
    getItem('Phụ kiện Apple', '15'),
  ]),
  getItem('Màn Hình', 'sub5', <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxxmb29.png?v=30266" className='h-6'/>, [
    getItem('LG', '16'),
    getItem('Asus', '17'),
    getItem('ViewSonic', '18'),
    getItem('Dell', '19'),
    getItem('Gigabyte', '20'),
    getItem('AOC', '21'),
    getItem('Acer', '22'),
    getItem('HKC', '23'),

  ]),
  getItem('Bàn Phím', 'sub6', <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxxmb210.png?v=30266" className='h-6'/>, [
    getItem('Akko', '24'),
    getItem('Logitech', '25'),
    getItem('Razer', '26'),
    getItem('Corsair', '27'),
    getItem('Leopold', '28'),
    getItem('iKBC', '29'),
    getItem('Steelseries', '30'),
    getItem('Asus', '31'),

  ]),
  getItem('Chuột + Lót chuột', 'sub7', <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxxmb211.png?v=30266" className='h-6'/>, [
    getItem('Zowie', '32'),
    getItem('Logitech', '33'),
    getItem('Razer', '34'),
    getItem('Corsair', '35'),
    getItem('Asus', '36'),
    getItem('HyperX', '37'),
    getItem('NZXT (Mới)', '38'),
    getItem('Steelseries', '39'),

  ]),
  getItem('Tai Nghe + Loa', 'sub8', <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxxmb212.png?v=30266" className='h-6'/>, [
    getItem('Logitech', '40'),
    getItem('HyperX', '41'),
    getItem('Razer', '42'),
    getItem('Corsair', '43'),
    getItem('Asus', '44'),
    getItem('Steelseries', '45'),
    getItem('Sony', '46'),
    getItem('Soundpeats', '47'),

  ]),
  getItem('Ghế + Bàn', 'sub9', <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxxmb213.png?v=30266" className='h-6'/>, [
    getItem('Hãng Ghế', 'g1', null, [getItem('Warrior', '48'), getItem('E-DRA', '49'),getItem('MSI', '50'),getItem('Eipone', '51'),getItem('MSI', '52'),getItem('AkRacing', '53')], 'group'),
    getItem('Bàn Gaming', 'g2', null, [getItem('Bàn Gaming DXRacer', '54'), getItem('Bàn Gaming E-Dra', '55'),getItem('Bàn Gaming Warrior', '56'),getItem('Bàn Gaming Cooler Master', '57')], 'group'),
    
    
    

  ]),


  
  
  getItem('Thông tin', 'grp', null, [getItem('18006975', '58',<img src="https://theme.hstatic.net/1000026716/1000440777/14/phone-solid.svg?v=30266" className='h-5'/>), getItem('Tư vấn mua hàng', '59',<img src="https://theme.hstatic.net/1000026716/1000440777/14/icon_menu_1.png?v=30266" className='h-5'/>),getItem('Tổng hợp khuyến mãi', '60',<img src="https://theme.hstatic.net/1000026716/1000440777/14/icon_menu_2.png?v=30266" className='h-5'/>)], 'group'),
];
const SideBar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      
      onClick={onClick}
      style={{ width: 256, height: 800, overflowX: 'hidden', overflowY: 'auto' }}
      defaultSelectedKeys={['1']}
      // defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      
    />
  );
};
export default SideBar;