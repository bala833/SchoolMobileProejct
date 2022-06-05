import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { GlobalSchoolInfo } from "../../ContextAPI";

const CustomModal = ({
  children,
  modalNumber,
  justifyCt,
  btmTopLeftRad,
  btmTopRightRad,
  btmBottomRightRad,
  btmBottomLeftRad,
  mrgn,
  animIn,
  animDown,
  cPadding,
}) => {
  const { bottomModal, bottomModalFunc } = useContext(GlobalSchoolInfo);
  return (
    <Modal
      isVisible={bottomModal === modalNumber}
      style={[styles.bottomModal, { justifyContent: justifyCt, margin: mrgn }]}
      animationIn={animIn}
      animationOut={animDown}
      backdropOpacity={0.5}
      backdropTransitionOutTiming={30}
      // onBackdropPress={()=>bottomModalFunc(null)}
    >
      <View
        style={[
          styles.modalContent,
          {
            borderTopLeftRadius: btmTopLeftRad,
            borderTopRightRadius: btmTopRightRad,
            borderBottomLeftRadius: btmBottomLeftRad,
            borderBottomRightRadius: btmBottomRightRad,
            padding: cPadding,
          },
        ]}
      >
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    borderColor: "rgba(160, 160, 160, 0.1)",
    paddingVertical: 30,

    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});

export default CustomModal;
