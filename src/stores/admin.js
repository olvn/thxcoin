import adminService from "@/lib/adminService";

export default {
  state: () => {
    return {
      unapprovedItems: [],
    };
  },
  getters: {
    unapprovedItems(state) {
      return [...state.unapprovedItems];
    },
  },
  mutations: {
    ADD_UNAPPROVED_ITEM(state, item) {
      state.unapprovedItems.push(item);
    },
    REMOVE_ITEM(state, item) {
      const itemIndex = state.unapprovedItems.findIndex(it => it.uuid = item.uuid);

      if (itemIndex > -1) {
        // found, remove
        state.unapprovedItems.splice(itemIndex, 1);
      }
    }
  },
  actions: {
    addUnapprovedItem(context, item) {
      console.log(item.uuid)
      context.commit('ADD_UNAPPROVED_ITEM', item);
    },
    approveItem(context, item) {
      adminService.approveItem(item);
      context.commit('REMOVE_ITEM', item);
    }
  },
  namespaced: true
};
