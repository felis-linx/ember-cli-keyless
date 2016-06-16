<%= adapterImports %>

export default <%= adapterBaseClass %>.extend(GenerateUUID, {<%= body %>

  generateIdForRecord() {
    return this.generateUUID();
  }
});
