import type { DocumentNode } from 'graphql'
export const typeDefs = {
   kind: 'Document',
   definitions: [
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'AuthData', loc: { start: 5, end: 13 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'token', loc: { start: 18, end: 23 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 25, end: 31 } },
                     loc: { start: 25, end: 31 },
                  },
                  loc: { start: 25, end: 32 },
               },
               directives: [],
               loc: { start: 18, end: 32 },
            },
         ],
         loc: { start: 0, end: 34 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'GoogleAuthData', loc: { start: 41, end: 55 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'token', loc: { start: 60, end: 65 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 67, end: 73 } },
                     loc: { start: 67, end: 73 },
                  },
                  loc: { start: 67, end: 74 },
               },
               directives: [],
               loc: { start: 60, end: 74 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'isNewUser', loc: { start: 77, end: 86 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Boolean', loc: { start: 88, end: 95 } },
                     loc: { start: 88, end: 95 },
                  },
                  loc: { start: 88, end: 96 },
               },
               directives: [],
               loc: { start: 77, end: 96 },
            },
         ],
         loc: { start: 36, end: 98 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'RegisterResponse', loc: { start: 105, end: 121 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'message', loc: { start: 126, end: 133 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 135, end: 141 } },
                     loc: { start: 135, end: 141 },
                  },
                  loc: { start: 135, end: 142 },
               },
               directives: [],
               loc: { start: 126, end: 142 },
            },
         ],
         loc: { start: 100, end: 144 },
      },
      {
         kind: 'InputObjectTypeDefinition',
         name: { kind: 'Name', value: 'RegisterInput', loc: { start: 152, end: 165 } },
         directives: [],
         fields: [
            {
               kind: 'InputValueDefinition',
               name: { kind: 'Name', value: 'name', loc: { start: 170, end: 174 } },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 176, end: 182 } },
                     loc: { start: 176, end: 182 },
                  },
                  loc: { start: 176, end: 183 },
               },
               directives: [],
               loc: { start: 170, end: 183 },
            },
            {
               kind: 'InputValueDefinition',
               name: { kind: 'Name', value: 'email', loc: { start: 186, end: 191 } },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 193, end: 199 } },
                     loc: { start: 193, end: 199 },
                  },
                  loc: { start: 193, end: 200 },
               },
               directives: [],
               loc: { start: 186, end: 200 },
            },
            {
               kind: 'InputValueDefinition',
               name: { kind: 'Name', value: 'password', loc: { start: 203, end: 211 } },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 213, end: 219 } },
                     loc: { start: 213, end: 219 },
                  },
                  loc: { start: 213, end: 220 },
               },
               directives: [],
               loc: { start: 203, end: 220 },
            },
         ],
         loc: { start: 146, end: 222 },
      },
      {
         kind: 'ObjectTypeExtension',
         name: { kind: 'Name', value: 'Mutation', loc: { start: 236, end: 244 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'googleLogin', loc: { start: 249, end: 260 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'token', loc: { start: 261, end: 266 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'String', loc: { start: 268, end: 274 } },
                           loc: { start: 268, end: 274 },
                        },
                        loc: { start: 268, end: 275 },
                     },
                     directives: [],
                     loc: { start: 261, end: 275 },
                  },
               ],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'GoogleAuthData', loc: { start: 278, end: 292 } },
                  loc: { start: 278, end: 292 },
               },
               directives: [],
               loc: { start: 249, end: 292 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'login', loc: { start: 295, end: 300 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'email', loc: { start: 301, end: 306 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'String', loc: { start: 308, end: 314 } },
                           loc: { start: 308, end: 314 },
                        },
                        loc: { start: 308, end: 315 },
                     },
                     directives: [],
                     loc: { start: 301, end: 315 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'password', loc: { start: 317, end: 325 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'String', loc: { start: 327, end: 333 } },
                           loc: { start: 327, end: 333 },
                        },
                        loc: { start: 327, end: 334 },
                     },
                     directives: [],
                     loc: { start: 317, end: 334 },
                  },
               ],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'AuthData', loc: { start: 337, end: 345 } },
                  loc: { start: 337, end: 345 },
               },
               directives: [],
               loc: { start: 295, end: 345 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'register', loc: { start: 348, end: 356 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'name', loc: { start: 357, end: 361 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'String', loc: { start: 363, end: 369 } },
                           loc: { start: 363, end: 369 },
                        },
                        loc: { start: 363, end: 370 },
                     },
                     directives: [],
                     loc: { start: 357, end: 370 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'email', loc: { start: 372, end: 377 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'String', loc: { start: 379, end: 385 } },
                           loc: { start: 379, end: 385 },
                        },
                        loc: { start: 379, end: 386 },
                     },
                     directives: [],
                     loc: { start: 372, end: 386 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'password', loc: { start: 388, end: 396 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'String', loc: { start: 398, end: 404 } },
                           loc: { start: 398, end: 404 },
                        },
                        loc: { start: 398, end: 405 },
                     },
                     directives: [],
                     loc: { start: 388, end: 405 },
                  },
               ],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'RegisterResponse', loc: { start: 408, end: 424 } },
                  loc: { start: 408, end: 424 },
               },
               directives: [],
               loc: { start: 348, end: 424 },
            },
         ],
         loc: { start: 224, end: 426 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Query', loc: { start: 432, end: 437 } },
         interfaces: [],
         directives: [],
         fields: [],
         loc: { start: 427, end: 437 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Mutation', loc: { start: 444, end: 452 } },
         interfaces: [],
         directives: [],
         fields: [],
         loc: { start: 439, end: 452 },
      },
      {
         kind: 'ScalarTypeDefinition',
         name: { kind: 'Name', value: 'Date', loc: { start: 461, end: 465 } },
         directives: [],
         loc: { start: 454, end: 465 },
      },
      {
         kind: 'ScalarTypeDefinition',
         name: { kind: 'Name', value: 'JSON', loc: { start: 474, end: 478 } },
         directives: [],
         loc: { start: 467, end: 478 },
      },
      {
         kind: 'ScalarTypeDefinition',
         name: { kind: 'Name', value: 'Upload', loc: { start: 487, end: 493 } },
         directives: [],
         loc: { start: 480, end: 493 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Comment', loc: { start: 499, end: 506 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: '_id', loc: { start: 511, end: 514 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 516, end: 518 } },
                     loc: { start: 516, end: 518 },
                  },
                  loc: { start: 516, end: 519 },
               },
               directives: [],
               loc: { start: 511, end: 519 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'user', loc: { start: 522, end: 526 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'User', loc: { start: 528, end: 532 } },
                     loc: { start: 528, end: 532 },
                  },
                  loc: { start: 528, end: 533 },
               },
               directives: [],
               loc: { start: 522, end: 533 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'post', loc: { start: 536, end: 540 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Post', loc: { start: 542, end: 546 } },
                     loc: { start: 542, end: 546 },
                  },
                  loc: { start: 542, end: 547 },
               },
               directives: [],
               loc: { start: 536, end: 547 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'likes', loc: { start: 550, end: 555 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'ListType',
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'ID', loc: { start: 558, end: 560 } },
                        loc: { start: 558, end: 560 },
                     },
                     loc: { start: 557, end: 561 },
                  },
                  loc: { start: 557, end: 562 },
               },
               directives: [],
               loc: { start: 550, end: 562 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'content', loc: { start: 565, end: 572 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 574, end: 580 } },
                     loc: { start: 574, end: 580 },
                  },
                  loc: { start: 574, end: 581 },
               },
               directives: [],
               loc: { start: 565, end: 581 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'createdAt', loc: { start: 584, end: 593 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Date', loc: { start: 595, end: 599 } },
                     loc: { start: 595, end: 599 },
                  },
                  loc: { start: 595, end: 600 },
               },
               directives: [],
               loc: { start: 584, end: 600 },
            },
         ],
         loc: { start: 494, end: 602 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Query', loc: { start: 609, end: 614 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'getComments', loc: { start: 619, end: 630 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'comments', loc: { start: 631, end: 639 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'ListType',
                           type: {
                              kind: 'NonNullType',
                              type: {
                                 kind: 'NamedType',
                                 name: { kind: 'Name', value: 'ID', loc: { start: 642, end: 644 } },
                                 loc: { start: 642, end: 644 },
                              },
                              loc: { start: 642, end: 645 },
                           },
                           loc: { start: 641, end: 646 },
                        },
                        loc: { start: 641, end: 647 },
                     },
                     directives: [],
                     loc: { start: 631, end: 647 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'ListType',
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'Comment', loc: { start: 651, end: 658 } },
                           loc: { start: 651, end: 658 },
                        },
                        loc: { start: 651, end: 659 },
                     },
                     loc: { start: 650, end: 660 },
                  },
                  loc: { start: 650, end: 661 },
               },
               directives: [],
               loc: { start: 619, end: 661 },
            },
         ],
         loc: { start: 604, end: 663 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Mutation', loc: { start: 670, end: 678 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'likeComment', loc: { start: 683, end: 694 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'commentId', loc: { start: 695, end: 704 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'ID', loc: { start: 706, end: 708 } },
                           loc: { start: 706, end: 708 },
                        },
                        loc: { start: 706, end: 709 },
                     },
                     directives: [],
                     loc: { start: 695, end: 709 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Boolean', loc: { start: 712, end: 719 } },
                     loc: { start: 712, end: 719 },
                  },
                  loc: { start: 712, end: 720 },
               },
               directives: [],
               loc: { start: 683, end: 720 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'deleteComment', loc: { start: 723, end: 736 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'commentId', loc: { start: 737, end: 746 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'ID', loc: { start: 748, end: 750 } },
                           loc: { start: 748, end: 750 },
                        },
                        loc: { start: 748, end: 751 },
                     },
                     directives: [],
                     loc: { start: 737, end: 751 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Boolean', loc: { start: 754, end: 761 } },
                     loc: { start: 754, end: 761 },
                  },
                  loc: { start: 754, end: 762 },
               },
               directives: [],
               loc: { start: 723, end: 762 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'createComment', loc: { start: 765, end: 778 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'content', loc: { start: 779, end: 786 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'String', loc: { start: 788, end: 794 } },
                           loc: { start: 788, end: 794 },
                        },
                        loc: { start: 788, end: 795 },
                     },
                     directives: [],
                     loc: { start: 779, end: 795 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'postId', loc: { start: 797, end: 803 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'ID', loc: { start: 805, end: 807 } },
                           loc: { start: 805, end: 807 },
                        },
                        loc: { start: 805, end: 808 },
                     },
                     directives: [],
                     loc: { start: 797, end: 808 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Comment', loc: { start: 811, end: 818 } },
                     loc: { start: 811, end: 818 },
                  },
                  loc: { start: 811, end: 819 },
               },
               directives: [],
               loc: { start: 765, end: 819 },
            },
         ],
         loc: { start: 665, end: 821 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Notification', loc: { start: 827, end: 839 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: '_id', loc: { start: 844, end: 847 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 849, end: 851 } },
                     loc: { start: 849, end: 851 },
                  },
                  loc: { start: 849, end: 852 },
               },
               directives: [],
               loc: { start: 844, end: 852 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'type', loc: { start: 855, end: 859 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 861, end: 867 } },
                     loc: { start: 861, end: 867 },
                  },
                  loc: { start: 861, end: 868 },
               },
               directives: [],
               loc: { start: 855, end: 868 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'sender', loc: { start: 871, end: 877 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'User', loc: { start: 879, end: 883 } },
                     loc: { start: 879, end: 883 },
                  },
                  loc: { start: 879, end: 884 },
               },
               directives: [],
               loc: { start: 871, end: 884 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'receiver', loc: { start: 887, end: 895 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'User', loc: { start: 897, end: 901 } },
                     loc: { start: 897, end: 901 },
                  },
                  loc: { start: 897, end: 902 },
               },
               directives: [],
               loc: { start: 887, end: 902 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'post', loc: { start: 905, end: 909 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Post', loc: { start: 911, end: 915 } },
                  loc: { start: 911, end: 915 },
               },
               directives: [],
               loc: { start: 905, end: 915 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'createdAt', loc: { start: 918, end: 927 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Date', loc: { start: 929, end: 933 } },
                     loc: { start: 929, end: 933 },
                  },
                  loc: { start: 929, end: 934 },
               },
               directives: [],
               loc: { start: 918, end: 934 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'isSeen', loc: { start: 937, end: 943 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Boolean', loc: { start: 945, end: 952 } },
                     loc: { start: 945, end: 952 },
                  },
                  loc: { start: 945, end: 953 },
               },
               directives: [],
               loc: { start: 937, end: 953 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'isRemoved', loc: { start: 956, end: 965 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Boolean', loc: { start: 967, end: 974 } },
                     loc: { start: 967, end: 974 },
                  },
                  loc: { start: 967, end: 975 },
               },
               directives: [],
               loc: { start: 956, end: 975 },
            },
         ],
         loc: { start: 822, end: 977 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Query', loc: { start: 984, end: 989 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'getNotifications', loc: { start: 994, end: 1010 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'ListType',
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'Notification', loc: { start: 1013, end: 1025 } },
                           loc: { start: 1013, end: 1025 },
                        },
                        loc: { start: 1013, end: 1026 },
                     },
                     loc: { start: 1012, end: 1027 },
                  },
                  loc: { start: 1012, end: 1028 },
               },
               directives: [],
               loc: { start: 994, end: 1028 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'countUnSeenNotifications', loc: { start: 1031, end: 1055 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Int', loc: { start: 1057, end: 1060 } },
                     loc: { start: 1057, end: 1060 },
                  },
                  loc: { start: 1057, end: 1061 },
               },
               directives: [],
               loc: { start: 1031, end: 1061 },
            },
         ],
         loc: { start: 979, end: 1063 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Mutation', loc: { start: 1070, end: 1078 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'markAllNotificationsSeen', loc: { start: 1083, end: 1107 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Boolean', loc: { start: 1109, end: 1116 } },
                     loc: { start: 1109, end: 1116 },
                  },
                  loc: { start: 1109, end: 1117 },
               },
               directives: [],
               loc: { start: 1083, end: 1117 },
            },
         ],
         loc: { start: 1065, end: 1119 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Subscription', loc: { start: 1126, end: 1138 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'newNotification', loc: { start: 1143, end: 1158 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Notification', loc: { start: 1160, end: 1172 } },
                     loc: { start: 1160, end: 1172 },
                  },
                  loc: { start: 1160, end: 1173 },
               },
               directives: [],
               loc: { start: 1143, end: 1173 },
            },
         ],
         loc: { start: 1121, end: 1175 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Post', loc: { start: 1181, end: 1185 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: '_id', loc: { start: 1190, end: 1193 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 1195, end: 1197 } },
                     loc: { start: 1195, end: 1197 },
                  },
                  loc: { start: 1195, end: 1198 },
               },
               directives: [],
               loc: { start: 1190, end: 1198 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'content', loc: { start: 1201, end: 1208 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 1210, end: 1216 } },
                  loc: { start: 1210, end: 1216 },
               },
               directives: [],
               loc: { start: 1201, end: 1216 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'photo', loc: { start: 1219, end: 1224 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 1226, end: 1232 } },
                  loc: { start: 1226, end: 1232 },
               },
               directives: [],
               loc: { start: 1219, end: 1232 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'user', loc: { start: 1235, end: 1239 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'User', loc: { start: 1241, end: 1245 } },
                  loc: { start: 1241, end: 1245 },
               },
               directives: [],
               loc: { start: 1235, end: 1245 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'createdAt', loc: { start: 1248, end: 1257 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Date', loc: { start: 1259, end: 1263 } },
                  loc: { start: 1259, end: 1263 },
               },
               directives: [],
               loc: { start: 1248, end: 1263 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'likes', loc: { start: 1266, end: 1271 } },
               arguments: [],
               type: {
                  kind: 'ListType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 1274, end: 1276 } },
                     loc: { start: 1274, end: 1276 },
                  },
                  loc: { start: 1273, end: 1277 },
               },
               directives: [],
               loc: { start: 1266, end: 1277 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'comments', loc: { start: 1280, end: 1288 } },
               arguments: [],
               type: {
                  kind: 'ListType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 1291, end: 1293 } },
                     loc: { start: 1291, end: 1293 },
                  },
                  loc: { start: 1290, end: 1294 },
               },
               directives: [],
               loc: { start: 1280, end: 1294 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'isPublic', loc: { start: 1297, end: 1305 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Boolean', loc: { start: 1307, end: 1314 } },
                  loc: { start: 1307, end: 1314 },
               },
               directives: [],
               loc: { start: 1297, end: 1314 },
            },
         ],
         loc: { start: 1176, end: 1316 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Query', loc: { start: 1323, end: 1328 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'getAllPosts', loc: { start: 1333, end: 1344 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'ListType',
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'Post', loc: { start: 1347, end: 1351 } },
                        loc: { start: 1347, end: 1351 },
                     },
                     loc: { start: 1346, end: 1352 },
                  },
                  loc: { start: 1346, end: 1353 },
               },
               directives: [],
               loc: { start: 1333, end: 1353 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'getBookmarkedPosts', loc: { start: 1356, end: 1374 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'ListType',
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'Post', loc: { start: 1377, end: 1381 } },
                        loc: { start: 1377, end: 1381 },
                     },
                     loc: { start: 1376, end: 1382 },
                  },
                  loc: { start: 1376, end: 1383 },
               },
               directives: [],
               loc: { start: 1356, end: 1383 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'getPostById', loc: { start: 1386, end: 1397 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'postId', loc: { start: 1398, end: 1404 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'ID', loc: { start: 1406, end: 1408 } },
                           loc: { start: 1406, end: 1408 },
                        },
                        loc: { start: 1406, end: 1409 },
                     },
                     directives: [],
                     loc: { start: 1398, end: 1409 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Post', loc: { start: 1412, end: 1416 } },
                     loc: { start: 1412, end: 1416 },
                  },
                  loc: { start: 1412, end: 1417 },
               },
               directives: [],
               loc: { start: 1386, end: 1417 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'explorePosts', loc: { start: 1420, end: 1432 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'limit', loc: { start: 1433, end: 1438 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'Int', loc: { start: 1440, end: 1443 } },
                        loc: { start: 1440, end: 1443 },
                     },
                     directives: [],
                     loc: { start: 1433, end: 1443 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'ListType',
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'Post', loc: { start: 1447, end: 1451 } },
                        loc: { start: 1447, end: 1451 },
                     },
                     loc: { start: 1446, end: 1452 },
                  },
                  loc: { start: 1446, end: 1453 },
               },
               directives: [],
               loc: { start: 1420, end: 1453 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'getPostsByUser', loc: { start: 1456, end: 1470 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'userId', loc: { start: 1471, end: 1477 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'ID', loc: { start: 1479, end: 1481 } },
                           loc: { start: 1479, end: 1481 },
                        },
                        loc: { start: 1479, end: 1482 },
                     },
                     directives: [],
                     loc: { start: 1471, end: 1482 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'ListType',
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'Post', loc: { start: 1486, end: 1490 } },
                        loc: { start: 1486, end: 1490 },
                     },
                     loc: { start: 1485, end: 1491 },
                  },
                  loc: { start: 1485, end: 1492 },
               },
               directives: [],
               loc: { start: 1456, end: 1492 },
            },
         ],
         loc: { start: 1318, end: 1494 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Mutation', loc: { start: 1501, end: 1509 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'likePost', loc: { start: 1514, end: 1522 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'postId', loc: { start: 1523, end: 1529 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'ID', loc: { start: 1531, end: 1533 } },
                           loc: { start: 1531, end: 1533 },
                        },
                        loc: { start: 1531, end: 1534 },
                     },
                     directives: [],
                     loc: { start: 1523, end: 1534 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Boolean', loc: { start: 1537, end: 1544 } },
                     loc: { start: 1537, end: 1544 },
                  },
                  loc: { start: 1537, end: 1545 },
               },
               directives: [],
               loc: { start: 1514, end: 1545 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'deletePost', loc: { start: 1548, end: 1558 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'postId', loc: { start: 1559, end: 1565 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'ID', loc: { start: 1567, end: 1569 } },
                           loc: { start: 1567, end: 1569 },
                        },
                        loc: { start: 1567, end: 1570 },
                     },
                     directives: [],
                     loc: { start: 1559, end: 1570 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Boolean', loc: { start: 1573, end: 1580 } },
                     loc: { start: 1573, end: 1580 },
                  },
                  loc: { start: 1573, end: 1581 },
               },
               directives: [],
               loc: { start: 1548, end: 1581 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'uploadPhoto', loc: { start: 1584, end: 1595 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'file', loc: { start: 1596, end: 1600 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'Upload', loc: { start: 1602, end: 1608 } },
                           loc: { start: 1602, end: 1608 },
                        },
                        loc: { start: 1602, end: 1609 },
                     },
                     directives: [],
                     loc: { start: 1596, end: 1609 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 1612, end: 1618 } },
                     loc: { start: 1612, end: 1618 },
                  },
                  loc: { start: 1612, end: 1619 },
               },
               directives: [],
               loc: { start: 1584, end: 1619 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'bookmarkPost', loc: { start: 1622, end: 1634 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'postId', loc: { start: 1635, end: 1641 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'ID', loc: { start: 1643, end: 1645 } },
                           loc: { start: 1643, end: 1645 },
                        },
                        loc: { start: 1643, end: 1646 },
                     },
                     directives: [],
                     loc: { start: 1635, end: 1646 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Boolean', loc: { start: 1649, end: 1656 } },
                     loc: { start: 1649, end: 1656 },
                  },
                  loc: { start: 1649, end: 1657 },
               },
               directives: [],
               loc: { start: 1622, end: 1657 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'createPost', loc: { start: 1660, end: 1670 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'content', loc: { start: 1671, end: 1678 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 1680, end: 1686 } },
                        loc: { start: 1680, end: 1686 },
                     },
                     directives: [],
                     loc: { start: 1671, end: 1686 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'photo', loc: { start: 1688, end: 1693 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 1695, end: 1701 } },
                        loc: { start: 1695, end: 1701 },
                     },
                     directives: [],
                     loc: { start: 1688, end: 1701 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'isPublic', loc: { start: 1703, end: 1711 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'Boolean', loc: { start: 1713, end: 1720 } },
                        loc: { start: 1713, end: 1720 },
                     },
                     directives: [],
                     loc: { start: 1703, end: 1720 },
                  },
               ],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'Post', loc: { start: 1723, end: 1727 } },
                     loc: { start: 1723, end: 1727 },
                  },
                  loc: { start: 1723, end: 1728 },
               },
               directives: [],
               loc: { start: 1660, end: 1728 },
            },
         ],
         loc: { start: 1496, end: 1730 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'User', loc: { start: 1736, end: 1740 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: '_id', loc: { start: 1745, end: 1748 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 1750, end: 1752 } },
                     loc: { start: 1750, end: 1752 },
                  },
                  loc: { start: 1750, end: 1753 },
               },
               directives: [],
               loc: { start: 1745, end: 1753 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'name', loc: { start: 1756, end: 1760 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 1762, end: 1768 } },
                     loc: { start: 1762, end: 1768 },
                  },
                  loc: { start: 1762, end: 1769 },
               },
               directives: [],
               loc: { start: 1756, end: 1769 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'bio', loc: { start: 1772, end: 1775 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 1777, end: 1783 } },
                  loc: { start: 1777, end: 1783 },
               },
               directives: [],
               loc: { start: 1772, end: 1783 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'posts', loc: { start: 1786, end: 1791 } },
               arguments: [],
               type: {
                  kind: 'ListType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 1794, end: 1796 } },
                     loc: { start: 1794, end: 1796 },
                  },
                  loc: { start: 1793, end: 1797 },
               },
               directives: [],
               loc: { start: 1786, end: 1797 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'cover', loc: { start: 1800, end: 1805 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 1807, end: 1813 } },
                  loc: { start: 1807, end: 1813 },
               },
               directives: [],
               loc: { start: 1800, end: 1813 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'avatar', loc: { start: 1816, end: 1822 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 1824, end: 1830 } },
                  loc: { start: 1824, end: 1830 },
               },
               directives: [],
               loc: { start: 1816, end: 1830 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'website', loc: { start: 1833, end: 1840 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 1842, end: 1848 } },
                  loc: { start: 1842, end: 1848 },
               },
               directives: [],
               loc: { start: 1833, end: 1848 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'createdAt', loc: { start: 1851, end: 1860 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Date', loc: { start: 1862, end: 1866 } },
                  loc: { start: 1862, end: 1866 },
               },
               directives: [],
               loc: { start: 1851, end: 1866 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'followers', loc: { start: 1869, end: 1878 } },
               arguments: [],
               type: {
                  kind: 'ListType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 1881, end: 1883 } },
                     loc: { start: 1881, end: 1883 },
                  },
                  loc: { start: 1880, end: 1884 },
               },
               directives: [],
               loc: { start: 1869, end: 1884 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'following', loc: { start: 1887, end: 1896 } },
               arguments: [],
               type: {
                  kind: 'ListType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 1899, end: 1901 } },
                     loc: { start: 1899, end: 1901 },
                  },
                  loc: { start: 1898, end: 1902 },
               },
               directives: [],
               loc: { start: 1887, end: 1902 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'bookmarks', loc: { start: 1905, end: 1914 } },
               arguments: [],
               type: {
                  kind: 'ListType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 1917, end: 1919 } },
                     loc: { start: 1917, end: 1919 },
                  },
                  loc: { start: 1916, end: 1920 },
               },
               directives: [],
               loc: { start: 1905, end: 1920 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'location', loc: { start: 1923, end: 1931 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 1933, end: 1939 } },
                  loc: { start: 1933, end: 1939 },
               },
               directives: [],
               loc: { start: 1923, end: 1939 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'dateOfBirth', loc: { start: 1942, end: 1953 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Date', loc: { start: 1955, end: 1959 } },
                  loc: { start: 1955, end: 1959 },
               },
               directives: [],
               loc: { start: 1942, end: 1959 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'totalMessages', loc: { start: 1962, end: 1975 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Int', loc: { start: 1977, end: 1980 } },
                  loc: { start: 1977, end: 1980 },
               },
               directives: [],
               loc: { start: 1962, end: 1980 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'profession', loc: { start: 1983, end: 1993 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 1995, end: 2001 } },
                  loc: { start: 1995, end: 2001 },
               },
               directives: [],
               loc: { start: 1983, end: 2001 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'isVerified', loc: { start: 2004, end: 2014 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Boolean', loc: { start: 2016, end: 2023 } },
                  loc: { start: 2016, end: 2023 },
               },
               directives: [],
               loc: { start: 2004, end: 2023 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'notifications', loc: { start: 2026, end: 2039 } },
               arguments: [],
               type: {
                  kind: 'ListType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 2042, end: 2044 } },
                     loc: { start: 2042, end: 2044 },
                  },
                  loc: { start: 2041, end: 2045 },
               },
               directives: [],
               loc: { start: 2026, end: 2045 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'totalNotifications', loc: { start: 2048, end: 2066 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Int', loc: { start: 2068, end: 2071 } },
                  loc: { start: 2068, end: 2071 },
               },
               directives: [],
               loc: { start: 2048, end: 2071 },
            },
         ],
         loc: { start: 1731, end: 2073 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Query', loc: { start: 2080, end: 2085 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'me', loc: { start: 2090, end: 2092 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'User', loc: { start: 2094, end: 2098 } },
                  loc: { start: 2094, end: 2098 },
               },
               directives: [],
               loc: { start: 2090, end: 2098 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'getUserById', loc: { start: 2101, end: 2112 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'id', loc: { start: 2113, end: 2115 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'ID', loc: { start: 2117, end: 2119 } },
                           loc: { start: 2117, end: 2119 },
                        },
                        loc: { start: 2117, end: 2120 },
                     },
                     directives: [],
                     loc: { start: 2113, end: 2120 },
                  },
               ],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'User', loc: { start: 2123, end: 2127 } },
                  loc: { start: 2123, end: 2127 },
               },
               directives: [],
               loc: { start: 2101, end: 2127 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'searchUsersByName', loc: { start: 2130, end: 2147 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'name', loc: { start: 2148, end: 2152 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'String', loc: { start: 2154, end: 2160 } },
                           loc: { start: 2154, end: 2160 },
                        },
                        loc: { start: 2154, end: 2161 },
                     },
                     directives: [],
                     loc: { start: 2148, end: 2161 },
                  },
               ],
               type: {
                  kind: 'ListType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'User', loc: { start: 2165, end: 2169 } },
                     loc: { start: 2165, end: 2169 },
                  },
                  loc: { start: 2164, end: 2170 },
               },
               directives: [],
               loc: { start: 2130, end: 2170 },
            },
         ],
         loc: { start: 2075, end: 2172 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Mutation', loc: { start: 2179, end: 2187 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'followOrUnfollowUser', loc: { start: 2192, end: 2212 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'userId', loc: { start: 2213, end: 2219 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'ID', loc: { start: 2221, end: 2223 } },
                           loc: { start: 2221, end: 2223 },
                        },
                        loc: { start: 2221, end: 2224 },
                     },
                     directives: [],
                     loc: { start: 2213, end: 2224 },
                  },
               ],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Boolean', loc: { start: 2227, end: 2234 } },
                  loc: { start: 2227, end: 2234 },
               },
               directives: [],
               loc: { start: 2192, end: 2234 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'updateProfile', loc: { start: 2237, end: 2250 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'name', loc: { start: 2251, end: 2255 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 2257, end: 2263 } },
                        loc: { start: 2257, end: 2263 },
                     },
                     directives: [],
                     loc: { start: 2251, end: 2263 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'bio', loc: { start: 2265, end: 2268 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 2270, end: 2276 } },
                        loc: { start: 2270, end: 2276 },
                     },
                     directives: [],
                     loc: { start: 2265, end: 2276 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'avatar', loc: { start: 2278, end: 2284 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 2286, end: 2292 } },
                        loc: { start: 2286, end: 2292 },
                     },
                     directives: [],
                     loc: { start: 2278, end: 2292 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'location', loc: { start: 2294, end: 2302 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 2304, end: 2310 } },
                        loc: { start: 2304, end: 2310 },
                     },
                     directives: [],
                     loc: { start: 2294, end: 2310 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'website', loc: { start: 2312, end: 2319 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 2321, end: 2327 } },
                        loc: { start: 2321, end: 2327 },
                     },
                     directives: [],
                     loc: { start: 2312, end: 2327 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'cover', loc: { start: 2329, end: 2334 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 2336, end: 2342 } },
                        loc: { start: 2336, end: 2342 },
                     },
                     directives: [],
                     loc: { start: 2329, end: 2342 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'profession', loc: { start: 2344, end: 2354 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 2356, end: 2362 } },
                        loc: { start: 2356, end: 2362 },
                     },
                     directives: [],
                     loc: { start: 2344, end: 2362 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'dateOfBirth', loc: { start: 2364, end: 2375 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 2377, end: 2383 } },
                        loc: { start: 2377, end: 2383 },
                     },
                     directives: [],
                     loc: { start: 2364, end: 2383 },
                  },
               ],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Boolean', loc: { start: 2386, end: 2393 } },
                  loc: { start: 2386, end: 2393 },
               },
               directives: [],
               loc: { start: 2237, end: 2393 },
            },
         ],
         loc: { start: 2174, end: 2395 },
      },
   ],
   loc: { start: 0, end: 2396 },
} as unknown as DocumentNode
