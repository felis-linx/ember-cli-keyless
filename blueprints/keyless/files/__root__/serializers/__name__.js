<%= serializerImports %>

export default <%= serializerBaseClass %>.extend(DS.EmbeddedRecordsMixin, Keyless, {<%= body %>
  attrs: {
    attribute: { embedded: 'always', keyless: true }
  }
});
