import { Snackbar, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
  onClear: () => void; // 🔥 ADD THIS
}


export default function UndoSnackbar({ open, onClose, onUndo, onClear }: Props) {
  return (
    <Snackbar
  open={open}
  onClose={() => {
    onClose();
    onClear(); // ✅ reset lastDeleted
  }}
  autoHideDuration={4000}
  message="Task deleted"
  action={
    <Button
      color="secondary"
      size="small"
      onClick={onUndo}
    >
      Undo
    </Button>
  }
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
/>

  );
}


