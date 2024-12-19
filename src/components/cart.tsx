import red from '@mui/material/colors/red';
import './cart.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
import { TextField } from '@mui/material';
import { IconButton } from '@mui/material';

const theme = createTheme({
  components: {

    MuiTable: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: "center",
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
interface Product {
  id: number;
  category: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  origin: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
  handleRemoveFromCart: (id: number) => void;
}
const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, handleRemoveFromCart }) => {

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //購物車金額格式
  const ccyFormat = (num: number) => `${num.toFixed(0)}`;

  //計算總金額
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
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
              <TableContainer component={Paper}>
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
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.title}</TableCell>

                        <TableCell >
                          <TextField
                            id="outlined-number"
                            type="number"
                            defaultValue={item.quantity}
                          />

                        </TableCell>
                        <TableCell >{ccyFormat(item.price * item.quantity)}</TableCell>
                        <TableCell >   <IconButton onClick={() => handleRemoveFromCart(item.id)}>

                          <DeleteOutlineIcon />
                        </IconButton> </TableCell>

                      </TableRow>
                    ))}

                    <TableRow>
                      <TableCell colSpan={2}>合計</TableCell>
                      <TableCell >{ccyFormat(getTotalPrice())}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </DialogContentText>
            <div className="action">
              <Button onClick={handleClose}>再逛逛</Button>
              <Button type="submit">訂購</Button>
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default ShoppingCart;