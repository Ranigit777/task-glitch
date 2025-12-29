import { Snackbar, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
  onClear: () => void; // ✅ add this
}

export default function UndoSnackbar({ open, onClose, onUndo, onClear }: Props) {
  const handleClose = (_event?: unknown, reason?: string) => {

    if (reason === 'clickaway') return;
    onClose();
    onClear(); // ✅ reset lastDeleted after snackbar closes
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={4000}
      message="Task deleted"
      action={<Button color="secondary" size="small" onClick={onUndo}>Undo</Button>}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}
