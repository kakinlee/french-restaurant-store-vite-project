import red from '@mui/material/colors/red';
import './cart.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Input, TextField } from '@mui/material';
import { IconButton } from '@mui/material';
import { DisplaySettings } from '@mui/icons-material';
import cardProducts from '../data/cardProducts.json';
import { useState, useEffect } from "react";

// 定义类型
// interface Product {
//   id: number;
//   category: string;
//   imageUrl:string;
//   title: string;
//   description: string;
//   price: number;
//   origin: number;
// }

// interface CartItem extends Product {
//   quantity: number;
// }

// interface ShoppingCartState {
//   cartItems: CartItem[];
// }

// interface ShoppingCartProps {
//   products: Product[];
// }

// const ShoppingCart: React.FC<ShoppingCartProps> = ({ products }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (product: Product) => {
//     const itemIndex = cartItems.findIndex((item) => item.id === product.id);
//     if (itemIndex === -1) {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     } else {
//       const updatedItems = [...cartItems];
//       updatedItems[itemIndex].quantity += 1;
//       setCartItems(updatedItems);
//     }
//   };

//   const updateQuantity = (productId: number, delta: number) => {
//     const itemIndex = cartItems.findIndex((item) => item.id === productId);
//     if (itemIndex !== -1) {
//       const updatedItems = [...cartItems];
//       const newQuantity = updatedItems[itemIndex].quantity + delta;
//       if (newQuantity > 0) {
//         updatedItems[itemIndex].quantity = newQuantity;
//       } else {
//         updatedItems.splice(itemIndex, 1);
//       }
//       setCartItems(updatedItems);
//     }
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

const theme = createTheme({
  components: {

    MuiTable: {
      styleOverrides: {
        root: {
          textAlign:"center",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign:"center",
           fontSize: '17px',
           textWrap: 'nowrap',
           
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '20px',
          fontWeight: '500',
          margin: '10px',
        },
      },
    },
    // MuiTextField: { styleOverrides: { root: { width: '70px' } } },
  },
});

export default function Cart() {

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //購物車

  const TAX_RATE = 0.07;

  function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty: number, unit: number) {
    return qty * unit;
  }

  function createRow(desc: string, qty: number, unit: number) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  interface Row {
    desc: string;
    qty: number;
    unit: number;
    price: number;
  }

  function subtotal(items: readonly Row[]) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
  ];

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;


  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
          <div className="car">
            <ShoppingCartIcon onClick={handleClickOpen('paper')} className="cart-icon" sx={{ color: red }} />
          </div>

        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title" align="center">
            我的購物車
          </DialogTitle>
          <DialogContent className='inner_car' dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <TableContainer  component={Paper}>
                <Table aria-label="spanning table" >
                  <TableHead>
                    <TableRow>
                      <TableCell >品名</TableCell>
                      <TableCell >數量</TableCell>
                      <TableCell >金額</TableCell>
                      <TableCell >刪除</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.desc}>
                        <TableCell>{row.desc}</TableCell>
                        
                        <TableCell >
                          <TextField
                            id="outlined-number"
                            type="number"

                            defaultValue={row.qty}
                          />

                        </TableCell>
                        <TableCell >{ccyFormat(row.price)}</TableCell>
                        <TableCell >   <IconButton>
                          <DeleteOutlineIcon />
                        </IconButton> </TableCell>


                      </TableRow>
                    ))}
                    {/* <TableRow>
                      <TableCell rowSpan={2} />
                      <TableCell colSpan={1}>Subtotal</TableCell>
                      <TableCell >{ccyFormat(invoiceSubtotal)}</TableCell>
                    </TableRow> */}

                    <TableRow>
                      <TableCell colSpan={2}>合計</TableCell>
                      <TableCell >{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              {/* ...existing code... */}
            </DialogContentText>
            <div className="action">
            <Button onClick={handleClose}>再逛逛</Button>
              <Button type="submit">訂購</Button>
              </div>
          </DialogContent>
          {/* <DialogActions >
            <Box sx={{ display: "flex" }}>
              <Button onClick={handleClose}>再逛逛</Button>
              <Button type="submit">訂購</Button>
            </Box>
          </DialogActions> */}
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}
