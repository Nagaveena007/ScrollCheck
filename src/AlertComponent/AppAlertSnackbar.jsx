/* import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  );
} */
import React from "react";
import PropTypes from "prop-types";
import { Snackbar, Typography, withStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { AppAlertSnackbarStyles } from "../styles";

export const useAppAlertSnackbar = ({ ...props }) => {
  const {
    alertMessages: { severity, message },
    onClose,
    ...rest
  } = props;

  const [open, setOpen] = React.useState(false);
  const [alertMessages, setAlertMessages] = React.useState({
    severity: "success",
    message: ""
  });

  const handleClose = React.useCallback(
    (event, reason) => {
      if (reason !== "clickaway") setOpen(false);
      onClose && onClose();
    },
    [onClose, setOpen]
  );
  React.useEffect(() => {
    if (severity && message) {
      setAlertMessages(() => ({ severity: severity, message: message }));
      setOpen(true);
    }
    return () => {
      setOpen(false);
    };
  }, [severity, message, setOpen, setAlertMessages]);

  return {
    open,
    onClose: handleClose,
    alertMessages: alertMessages,
    ...rest
  };
};

useAppAlertSnackbar.propTypes = {
  alertMessages: PropTypes.shape({
    message: PropTypes.string,
    severity: PropTypes.string
  }).isRequired,
  onClose: PropTypes.func
};

const AppAlertSnackbar = React.forwardRef(({ ...props }, ref) => {
  const {
    open,
    onClose,
    alertMessages: { severity, message },
    SnackbarProps = {
      autoHideDuration: 7000,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      }
    },
    AlertProps = {
      variant: "filled",
      elevation: 12
    },
    TypographyProps = {
      variant: "body1",
      align: "center"
    },
    classes
  } = props;

  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      {...SnackbarProps}
      className={classes.snackbarArea}
      ref={resolvedRef}
    >
      <Alert severity={severity} onClose={onClose} {...AlertProps}>
        <Typography
          children={message}
          className={classes.alertText}
          {...TypographyProps}
        />
      </Alert>
    </Snackbar>
  );
});

AppAlertSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  alertMessages: PropTypes.shape({
    message: PropTypes.string,
    severity: PropTypes.string
  }).isRequired,
  SnackbarProps: PropTypes.object,
  AlertProps: PropTypes.object,
  TypographyProps: PropTypes.object,
  classes: PropTypes.object
};

const StyledAppAlertSnackbar = withStyles(AppAlertSnackbarStyles, {
  name: "MuiEmrysAppAlert"
})(AppAlertSnackbar);
export default StyledAppAlertSnackbar;
